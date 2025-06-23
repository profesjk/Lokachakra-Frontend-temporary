"use client";

import Image from "next/image";
import { Bell, ChevronDown, Settings, Globe, Sliders, Accessibility, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Fix: useRouter for navigation


export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const users = Array(8).fill({
        name: "Roshan Yadav",
        role: "Frontend Developer",
        experience: "05 Years of Experience",
    });

    const tickets = Array(15).fill({
        customer: "Akash Saratha",
        email: "akash@gmail.com",
        query: "Smart contract error",
        ticketNo: "#LOKI5",
        priority: "High",
        status: "Pending",
        date: "02/06/2025"
    });
    const [selectedTicket, setSelectedTicket] = useState<any>(null);

    const closeModal = () => setSelectedTicket(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const router = useRouter(); // Fix: useRouter instead of useNavigate

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        setShowLogoutModal(false);
        router.push('/auth');  // Redirecting to auth page
    };

    const cancelLogout = () => {
        setShowLogoutModal(false);
    };
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        { id: 1, message: "New user registered", time: "5 mins ago" },
        { id: 2, message: "New ticket assigned", time: "10 mins ago" },
        { id: 3, message: "Database backup completed", time: "1 hour ago" },
    ];

    return (
        <div className="flex min-h-screen bg-[#f6f6f6] flex-col m-0 p-0">
            {/* Top Navbar */}
            <div className="flex justify-between items-center bg-white px-6 py-3 shadow fixed top-0 left-0 right-0 z-10 h-20">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src="/lokachakra-logo.png" alt="Lokachakra" width={40} height={40} />
                    <span className="text-xl font-bold ml-3 text-gray-800">Lokachakra</span>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6 relative">

                    {/* Notifications */}
                    <div className="relative">
                        <Bell
                            size={24}
                            className="text-gray-700 cursor-pointer"
                            onClick={() => {
                                setShowNotifications(!showNotifications);
                                setShowAccountMenu(false);
                            }}
                        />
                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-20">
                                <div className="p-4 border-b font-semibold text-gray-700">Notifications</div>
                                <div className="max-h-60 overflow-y-auto">
                                    {notifications.map((notif) => (
                                        <div key={notif.id} className="p-3 border-b hover:bg-gray-100">
                                            <p className="text-sm text-gray-800">{notif.message}</p>
                                            <span className="text-xs text-gray-500">{notif.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Admin Email */}
                    <span className="text-gray-800 font-semibold">ADMIN@LOKACHAKRA.IN</span>

                    {/* User Icon */}
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 cursor-pointer"
                        onClick={() => {
                            setShowAccountMenu(!showAccountMenu);
                            setShowNotifications(false);
                        }}
                    >
                        <Image src="/lokachakra-logo.png" alt="User Icon" width={24} height={24} />
                    </div>

                    <ChevronDown
                        size={24}
                        className="text-gray-700 cursor-pointer"
                        onClick={() => {
                            setShowAccountMenu(!showAccountMenu);
                            setShowNotifications(false);
                        }}
                    />

                    {/* Account Dropdown */}
                    {showAccountMenu && (
                        <div className="absolute right-0 top-16 w-60 bg-white rounded-lg shadow-lg z-20">
                            <div className="p-3 hover:bg-gray-100 flex items-center gap-3 cursor-pointer text-gray-800">
                                <Settings size={18} /> Account Settings
                            </div>
                            <div className="p-3 hover:bg-gray-100 flex items-center gap-3 cursor-pointer text-gray-800">
                                <Sliders size={18} /> Preferences
                            </div>
                            <div className="p-3 hover:bg-gray-100 flex items-center gap-3 cursor-pointer text-gray-800">
                                <Globe size={18} /> Language
                            </div>
                            <div className="p-3 hover:bg-gray-100 flex items-center gap-3 cursor-pointer text-gray-800">
                                <Accessibility size={18} /> Accessibility
                            </div>
                            <div
                                className="p-3 hover:bg-gray-100 flex items-center gap-3 cursor-pointer text-red-600 font-semibold"
                                onClick={handleLogout}
                            >
                                <LogOut size={18} /> Logout
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 pt-7">
                {/* Sidebar */}
                <div className="w-64 bg-white shadow-md p-6 flex flex-col justify-between fixed top-20 bottom-0">
                    <nav className="space-y-4">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`w-full text-left px-4 py-2 font-semibold rounded-lg transition-all duration-300
            ${activeTab === "dashboard"
                                    ? "bg-blue-100 text-blue-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"}`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab("tickets")}
                            className={`w-full text-left px-4 py-2 font-semibold rounded-lg transition-all duration-300
            ${activeTab === "tickets"
                                    ? "bg-blue-100 text-blue-600 shadow-sm"
                                    : "text-gray-800 hover:bg-gray-100"}`}
                        >
                            Tickets <span className="ml-1 text-sm text-gray-500">20</span>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 font-semibold text-gray-800 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            Logout
                        </button>
                    </nav>
                </div>


                {/* Logout Confirmation Modal */}
                {showLogoutModal && (
                    <div className="absolute top-0 left-0 w-full h-full  flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                            <h2 className="text-lg font-semibold mb-4 text-gray-800">Are you sure you want to Logout?</h2>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={confirmLogout}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Yes, Logout
                                </button>
                                <button
                                    onClick={cancelLogout}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>

                )}

                <div className="flex-1 ml-64 p-6">
                    {activeTab === "dashboard" && (
                        <>
                            {/* Header Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col items-center justify-center bg-white p-4 rounded-md shadow ${idx === 0 ? "border-2 border-blue-400" : ""}`}
                                    >
                                        <div className="text-xs text-gray-500">NUMBER OF USERS</div>
                                        <div className="text-2xl font-bold text-gray-900">50K+</div>
                                    </div>
                                ))}
                            </div>

                            {/* Search Filters */}
                            <div className="bg-white p-4 rounded-md shadow mb-6">
                                <h2 className="text-md font-semibold mb-4 text-gray-900">Search Anything You Need</h2>
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                    <select className="border border-gray-300 rounded p-2 text-gray-900">
                                        <option>Search by Profile</option>
                                        <option>Frontend Developer</option>
                                        <option>Backend Developer</option>
                                        <option>UI/UX Designer</option>
                                        <option>DevOps Engineer</option>
                                    </select>

                                    <select className="border border-gray-300 rounded p-2 text-gray-900">
                                        <option>Experience</option>
                                        <option>0-1 Years</option>
                                        <option>1-3 Years</option>
                                        <option>3-5 Years</option>
                                        <option>5+ Years</option>
                                    </select>

                                    <select className="border border-gray-300 rounded p-2 text-gray-900">
                                        <option>Country</option>
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>Germany</option>
                                        <option>Canada</option>
                                    </select>

                                    <select className="border border-gray-300 rounded p-2 text-gray-900">
                                        <option>City</option>
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                        <option>Bangalore</option>
                                        <option>Hyderabad</option>
                                    </select>

                                    <button className="bg-gray-800 text-white rounded-full px-6 py-2 hover:bg-gray-900 transition">
                                        Search
                                    </button>
                                </div>
                            </div>

                            {/* User Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {users.map((user, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-md shadow flex flex-col items-center">
                                        <Image src="/avatar.png" alt="Profile" width={80} height={80} className="rounded-full mb-4" />
                                        <h3 className="font-semibold text-center text-gray-900">{user.name}</h3>
                                        <p className="text-sm text-center text-gray-800">{user.role}</p>
                                        <p className="text-sm text-center mb-4 text-gray-800">{user.experience}</p>
                                        <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-2">View Profile</button>
                                        <button className="text-sm text-gray-700 underline">Start Chat</button>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center items-center mt-6 space-x-2">
                                <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded">Prev</button>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        className={`px-3 py-1 rounded ${page === 1 ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded">Next</button>
                            </div>

                        </>
                    )}

                    {activeTab === "tickets" && (
                        <>
                            {/* Ticket Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow">
                                    <div className="text-xs text-gray-500">TOTAL TICKETS</div>
                                    <div className="text-2xl font-bold text-gray-900">6,635</div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow">
                                    <div className="text-xs text-gray-500">IN PROGRESS TICKETS</div>
                                    <div className="text-2xl font-bold text-gray-900">360</div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow">
                                    <div className="text-xs text-gray-500">COMPLETED TICKETS</div>
                                    <div className="text-2xl font-bold text-gray-900">1250</div>
                                </div>
                                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow">
                                    <div className="text-xs text-gray-500">DELETE TICKETS</div>
                                    <div className="text-2xl font-bold text-gray-900">5000</div>
                                </div>
                            </div>

                            {/* Filters */}
                            <div className="bg-white p-4 rounded-md shadow mb-6">
                                <div className="flex justify-between items-center flex-wrap gap-4">
                                    {/* Left Section - Title */}
                                    <div className="flex-shrink-0">
                                        <h2 className="text-2xl font-bold text-gray-900 font-serif whitespace-nowrap">
                                            New Tickets <span className="font-extrabold">25</span>
                                        </h2>
                                    </div>

                                    {/* Right Section - Filters */}
                                    <div className="flex flex-wrap items-center gap-4 justify-end">
                                        <select className="border border-gray-300 rounded-md px-6 py-3 text-gray-900 font-serif text-sm shadow-sm">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>

                                        <select className="border border-gray-300 rounded-md px-6 py-3 text-gray-900 font-serif text-sm shadow-sm">
                                            <option>All Tickets</option>
                                            <option>Open</option>
                                            <option>In Progress</option>
                                            <option>Closed</option>
                                        </select>

                                        <input type="date" className="border border-gray-300 rounded-md px-6 py-3 text-gray-900 font-serif text-sm shadow-sm" placeholder="From Date" />

                                        <input type="date" className="border border-gray-300 rounded-md px-6 py-3 text-gray-900 font-serif text-sm shadow-sm" placeholder="To Date" />

                                        <button className="bg-gray-700 text-white uppercase font-semibold rounded-full px-10 py-3 tracking-wide text-sm shadow-sm">
                                            Filter
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="relative">
                                {/* Transparent Blur Background */}
                                {selectedTicket && (
                                    <div
                                        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-[6px] z-40 transition-all duration-300"
                                        onClick={closeModal}
                                    />
                                )}

                                {/* Modal */}
                                {selectedTicket && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                                        <div
                                            className="relative bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full flex flex-col md:flex-row gap-6"
                                            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
                                        >
                                            {/* Cut/Close Button */}
                                            <button
                                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-semibold"
                                                onClick={closeModal}
                                            >
                                                &times;
                                            </button>

                                            {/* Left Info Panel */}
                                            <div className="bg-gray-50 p-4 rounded-md border w-full md:w-1/2 font-serif text-gray-800 text-sm space-y-2">
                                                <p><span className="font-semibold">Customer Name:</span> {selectedTicket.customer}</p>
                                                <p><span className="font-semibold">Customer Email ID:</span> {selectedTicket.email}</p>
                                                <p><span className="font-semibold">Query Name:</span> {selectedTicket.query}</p>
                                                <p><span className="font-semibold">Ticket ID:</span> {selectedTicket.ticketNo}</p>
                                                <p><span className="font-semibold">Priority:</span> {selectedTicket.priority}</p>
                                                <p><span className="font-semibold">Status:</span> {selectedTicket.status}</p>
                                                <p><span className="font-semibold">Date:</span> {selectedTicket.date}</p>
                                            </div>

                                            {/* Right Description Panel */}
                                            <div className="text-gray-700 font-serif w-full md:w-1/2">
                                                <p className="font-bold mb-2">Problem Description:</p>
                                                <p className="text-sm leading-relaxed">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                                                </p>

                                                <div className="flex justify-end mt-4">
                                                    <button
                                                        onClick={closeModal}
                                                        className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide"
                                                    >
                                                        Accept Query
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Ticket Table */}
                                <div className="bg-white rounded-md shadow overflow-x-auto">
                                    <table className="min-w-full text-sm text-left font-sans">
                                        <thead className="bg-gray-100 text-gray-700 font-semibold">
                                            <tr>
                                                <th className="px-4 py-2">No.</th>
                                                <th className="px-4 py-2">Customer Name</th>
                                                <th className="px-4 py-2">Email ID</th>
                                                <th className="px-4 py-2">Queries Name</th>
                                                <th className="px-4 py-2">Ticket No</th>
                                                <th className="px-4 py-2">Priority</th>
                                                <th className="px-4 py-2">Status</th>
                                                <th className="px-4 py-2">Date</th>
                                                <th className="px-4 py-2">View</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tickets.map((ticket, idx) => (
                                                <tr key={idx} className="border-b hover:bg-gray-50">
                                                    <td className="px-4 py-2 text-gray-800 font-medium">{(idx + 1).toString().padStart(2, '0')}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.customer}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.email}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.query}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.ticketNo}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.priority}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.status}</td>
                                                    <td className="px-4 py-2 text-gray-800">{ticket.date}</td>
                                                    <td
                                                        className="px-4 py-2 text-blue-600 font-semibold cursor-pointer hover:underline"
                                                        onClick={() => setSelectedTicket(ticket)}
                                                    >
                                                        View
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Pagination */}
                            <div className="flex justify-center items-center mt-6 space-x-2">
                                <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded">Prev</button>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        className={`px-3 py-1 rounded ${page === 1 ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded">Next</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}