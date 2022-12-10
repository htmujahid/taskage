import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 620) {
                setIsOpen(false);
            }
        }
    }, []);

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 620) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        });
    }

    const { data: session } = useSession();
    return (
        <aside
            className={`bg-white duration-300 ${isOpen ? "w-64" : "w-16"} `}
            aria-label="Sidebar"
        >
            <div className="py-4 pl-3 rounded min-h-screen border flex flex-col justify-between">
                <button
                    className="flex items-center pl-2.5 mb-5 opacity-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        src="/assets/icons/brandmark-black.svg"
                        className="mr-3 h-6"
                        alt="Taskage Logo"
                    />
                    <span
                        className={`self-center text-xl font-semibold whitespace-nowrap ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        TASKAGE
                    </span>
                </button>
                <ul className={`space-y-2 `}>
                    <li>
                        <Link
                            href="/app/dashboard"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span
                                className={`flex-1 ml-3 whitespace-nowrap ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/private"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                            </svg>
                            <span
                                className={`flex-1 ml-3 whitespace-nowrap ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                Private
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/projects"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>

                            <span
                                className={`flex-1 ml-3 whitespace-nowrap ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                Projects
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/meeting"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span
                                className={`flex-1 ml-3 whitespace-nowrap ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                Meeting Notes
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/calendar"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span
                                className={`flex-1 ml-3 whitespace-nowrap ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                Calendar
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/app/inbox"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                            </svg>
                            <span
                                className={`flex-1 ml-3 whitespace-nowrap ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                Inbox
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="flex-1"></div>
                <ul className="flex justify-between items-center">
                    <li
                        className={`flex items-center gap-2 ml-2 ${
                            isOpen ? "flex" : "hidden"
                        }`}
                    >
                        <span className="flex items-center justify-center flex-col gap-2 text-base font-normal text-gray-900 rounded-lg">
                            <img
                                src={session?.user.image}
                                alt="image"
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                        </span>
                        <span
                            className={`text-base whitespace-none ${
                                isOpen ? "block" : "hidden"
                            }`}
                        >
                            {session?.user.name}
                        </span>
                    </li>
                    <li>
                        <Link
                            href="/app/settings"
                            className="flex items-start p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                        >
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;