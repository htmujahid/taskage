import { client } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import { requireApiAuth } from "../../../utils/requireAuth";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
    const access = await requireApiAuth(req, res);
    if (!access) return;
    const session = await getSession({ req });
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                await client.connect();
                const database = client.db("taskage");
                const collection = database.collection("readings");
                const readings = await collection
                    .find({
                        created_by: session.user.email,
                    })
                    .sort({ created_at: -1 })
                    .toArray();
                res.status(200).json(readings);
            } catch (error) {
                res.status(400).json({ success: false });
            } finally {
                await client.close();
            }
            break;
        case "POST":
            // Create data in your database
            const data = req.body;

            if (!data.title || !data.author || !data.status) {
                res.status(422).json({ message: "Invalid input." });
                return;
            }

            const newReading = {
                title: data.title,
                author: data.author,
                type: data.type,
                start_date: data.start_date,
                end_date: data.end_date,
                status: data.status,
                color: data.color,
                created_by: session.user.email,
                created_at: new Date().toISOString(),
            };
            try {
                await client.connect();
                const database = client.db("taskage");
                const collection = database.collection("readings");
                const result = await collection.insertOne(newReading);
                console.log(
                    `1 document was inserted with the _id: ${result.insertedId}`
                );
                res.status(200).json({ id: result.insertedId });
            } catch (e) {
                console.error(e);
                res.status(500).json({ error: e });
            } finally {
                await client.close();
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
