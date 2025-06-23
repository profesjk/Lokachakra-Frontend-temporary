"use client";
import Image from "next/image";
import { Bell, ChevronDown, Settings, Globe, Sliders, Accessibility, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
    // Sidebar active tab
    const [activeTab, setActiveTab] = useState("dashboard");
    // Section tab for tickets/matchmaking
    const [matchTab, setMatchTab] = useState('newMatch');
    const [selectedTicket, setSelectedTicket] = useState<any>(null);
    const closeModal = () => setSelectedTicket(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const router = useRouter();
    const handleLogout = () => setShowLogoutModal(true);
    const confirmLogout = () => {
        setShowLogoutModal(false);
        router.push('/auth');
    };
    const cancelLogout = () => setShowLogoutModal(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        { id: 1, message: "New user registered", time: "5 mins ago" },
        { id: 2, message: "New ticket assigned", time: "10 mins ago" },
        { id: 3, message: "Database backup completed", time: "1 hour ago" },
    ];

    // Only one dropdown open at a time for filters
    const [openDropdown, setOpenDropdown] = useState<null | 'role' | 'experience' | 'location' | 'skills' | 'availability'>(null);

    // Role dropdown for match making
    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    const roleOptions = [
        "Designer",
        "Developer",
        "Marketer",
        "Manager",
        "Writer",
        "Tester"
    ];
    const toggleRole = (role: string) => {
        setSelectedRoles((prev) =>
            prev.includes(role)
                ? prev.filter((r) => r !== role)
                : [...prev, role]
        );
    };

    // Experience dropdown for match making
    const [selectedExperience, setSelectedExperience] = useState<string[]>(['Any Experience']);
    const experienceOptions = [
        'Any Experience',
        '0 to 3 Years',
        '3 to 5 Years',
        '5 to 10 Years',
        '10 to 15 Years',
        '20 Years',
    ];
    const toggleExperience = (value: string) => {
        setSelectedExperience((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value]
        );
    };

    // Location dropdown for match making
    const locationOptions = [
        'Remote',
        'On-site',
        'Delhi',
        'Mumbai',
        'Bangalore',
        'Hyderabad',
        'Chennai',
        'Pune',
    ];
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const toggleLocation = (location: string) => {
        setSelectedLocations((prev) =>
            prev.includes(location)
                ? prev.filter((l) => l !== location)
                : [...prev, location]
        );
    };

    // Skills dropdown for match making
    const skillsOptions = ['Photoshop', 'Illustrator', 'Figma', 'After Effects'];
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const toggleSkill = (skill: string) => {
        setSelectedSkills((prev) =>
            prev.includes(skill)
                ? prev.filter((s) => s !== skill)
                : [...prev, skill]
        );
    };

    // Availability dropdown for match making
    const availabilityOptions = ['Full-Time', 'Part-Time', 'Freelance', 'Internship'];
    const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);
    const toggleAvailability = (option: string) => {
        setSelectedAvailability((prev) =>
            prev.includes(option)
                ? prev.filter((a) => a !== option)
                : [...prev, option]
        );
    };

    // For ticket query selection
    const [showQueries, setShowQueries] = useState(false);
    const [selectedQueries, setSelectedQueries] = useState<string[]>([]);

    // For showing match results
    const [showResults, setShowResults] = useState(false);

    // For categories in match results
    const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({
        'UI/UX Designer': false,
        'UI Designer': false,
        'Graphics Designer': false,
        'Logo Designer': false,
        'Brand Designer': false,
        'Interior Designer': false,
        'Media Designer': false,
    });
    const [expanded, setExpanded] = useState('UI/UX Designer');
    const handleCategoryToggle = (category: string) => {
        setExpanded(expanded === category ? '' : category);
    };

    // Dummy employees for match results
    const employees = new Array(6).fill({
        name: 'Karan Yadav',
        position: 'UI/UX Designer',
        email: 'yadavkaran12@gmail.com',
        experience: '03 Years Experience',
        match: '0%',
    });

    // Dummy tickets for my tickets
    const tickets = Array(3).fill({
        id: '#Loki5',
        queryName: 'Smart contract error',
        assignee: 'Pratham Chaudhary',
        status: 'In Progress',
        priority: 'High',
        completionDate: 'Thu, 05 May, 2025',
        createdAt: 'Mon, 02 May, 2025 - 02:30PM',
    });

    // Ensure only one filter dropdown is open at a time
    const handleDropdown = (dropdown: typeof openDropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <>
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
                                onClick={() => { setActiveTab("dashboard"); setMatchTab('newMatch'); }}
                                className={`w-full text-left px-4 py-2 font-semibold rounded-lg transition-all duration-300
            ${activeTab === "dashboard"
                                        ? "bg-blue-100 text-blue-600 shadow-sm"
                                        : "text-gray-800 hover:bg-gray-100"}`}
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => { setActiveTab("matchmaking"); setMatchTab('newMatch'); }}
                                className={`w-full text-left px-4 py-2 font-semibold rounded-lg transition-all duration-300
            ${activeTab === "matchmaking"
                                        ? "bg-blue-100 text-blue-600 shadow-sm"
                                        : "text-gray-800 hover:bg-gray-100"}`}
                            >
                                Match Making
                            </button>
                            <button
                                onClick={() => { setActiveTab("tickets"); setMatchTab('newTicket'); }}
                                className={`w-full text-left px-4 py-2 font-semibold rounded-lg transition-all duration-300
            ${activeTab === "tickets"
                                        ? "bg-blue-100 text-blue-600 shadow-sm"
                                        : "text-gray-800 hover:bg-gray-100"}`}
                            >
                                Support Ticket <span className="ml-1 text-sm text-gray-500">20</span>
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
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
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
                        {/* DASHBOARD */}
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

                        {/* TICKETS */}
                        {activeTab === "tickets" && (
                            <>
                                <div className="p-6 rounded-lg bg-gray-100">
                                    {/* Tabs */}
                                    <div className="flex gap-4 mb-6 font-serif text-lg font-semibold">
                                        <button
                                            className={`px-6 py-2 rounded-t-lg ${matchTab === 'newTicket' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'}`}
                                            onClick={() => setMatchTab('newTicket')}
                                        >
                                            NEW TICKET
                                        </button>
                                        <button
                                            className={`px-6 py-2 rounded-t-lg ${matchTab === 'myTicket' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'}`}
                                            onClick={() => setMatchTab('myTicket')}
                                        >
                                            MY TICKET
                                        </button>
                                    </div>
                                    {/* NEW TICKET Filters */}
                                    {matchTab === 'newTicket' && (
                                        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                                            <h2 className="text-2xl font-bold text-gray-800 mb-6">ADD NEW TICKETS</h2>

                                            <form className="space-y-6">
                                                {/* First Row: Full Name & Mobile Number */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Full Name*"
                                                            className="w-full border rounded-md px-4 py-2 text-gray-800 shadow-sm"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number*</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Mobile Number*"
                                                            className="w-full border rounded-md px-4 py-2 text-gray-800 shadow-sm"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Second Row: Email ID & Select Query */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email ID*</label>
                                                        <input
                                                            type="email"
                                                            placeholder="Email ID*"
                                                            className="w-full border rounded-md px-4 py-2 text-gray-800 shadow-sm"
                                                        />
                                                    </div>
                                                    <div className="relative">
                                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Select Query*</label>

                                                        <button
                                                            type="button"
                                                            onClick={() => setShowQueries(!showQueries)}
                                                            className="w-full border rounded-md px-4 py-2 text-left text-gray-800 shadow-sm flex justify-between items-center"
                                                        >
                                                            {selectedQueries.length > 0 ? selectedQueries.join(', ') : 'Select*'}
                                                            <span>{showQueries ? '▲' : '▼'}</span>
                                                        </button>

                                                        {showQueries && (
                                                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                                                {['Smart Contract Error', 'Wallet Issue', 'Transaction Delay'].map((query) => (
                                                                    <label
                                                                        key={query}
                                                                        className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-800"
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            className="mr-2"
                                                                            checked={selectedQueries.includes(query)}
                                                                            onChange={() =>
                                                                                setSelectedQueries((prev) =>
                                                                                    prev.includes(query)
                                                                                        ? prev.filter((item) => item !== query)
                                                                                        : [...prev, query]
                                                                                )
                                                                            }
                                                                        />
                                                                        {query}
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message*</label>
                                                    <textarea
                                                        rows={5}
                                                        placeholder="Type Message*"
                                                        className="w-full border rounded-md px-4 py-2 text-gray-800 shadow-sm resize-none"
                                                    ></textarea>
                                                    <p className="text-right text-xs text-gray-500 mt-1">Maximum 1000 Character (1000/0)</p>
                                                </div>

                                                {/* File Upload */}
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Attached File*</label>
                                                    <div className="w-full border rounded-md px-4 py-6 text-center text-sm text-gray-500 shadow-sm">
                                                        <div className="flex justify-center mb-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-6 w-6 text-gray-400"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 10l5 5m0 0l5-5m-5 5V3" />
                                                            </svg>
                                                        </div>
                                                        <p className="text-xs">
                                                            Browse or drag file to attach, or PNG, JPEG, GIF, PDF up to 10MB
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Buttons */}
                                                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                                                    <button
                                                        type="submit"
                                                        className="bg-[#3C3C3B] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-black transition"
                                                    >
                                                        SUBMIT QUERY
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="text-[#3C3C3B] hover:underline text-sm"
                                                    >
                                                        CANCEL
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                    {/* MY TICKET*/}
                                    {matchTab === 'myTicket' && (
                                        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                                            {/* Title and Filters Row */}
                                            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                                                <h2 className="text-2xl font-bold text-gray-800">MY TICKETS</h2>
                                                <div className="flex flex-wrap gap-4 items-center">
                                                    <select className="border px-4 py-2 rounded bg-white text-sm text-gray-800 shadow-sm">
                                                        <option>All Tickets</option>
                                                    </select>
                                                    <input
                                                        type="date"
                                                        className="border px-4 py-2 rounded text-sm text-gray-800 shadow-sm"
                                                        placeholder="From Date"
                                                    />
                                                    <input
                                                        type="date"
                                                        className="border px-4 py-2 rounded text-sm text-gray-800 shadow-sm"
                                                        placeholder="To Date"
                                                    />
                                                    <button className="bg-[#3C3C3B] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-black transition">
                                                        FILTER
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Ticket List */}
                                            {[1, 2, 3, 4].map((_, idx) => (
                                                <div key={idx} className="border p-6 rounded-lg mb-6 bg-gray-50 shadow-sm">
                                                    <div className="flex justify-between flex-wrap gap-2 text-sm font-semibold text-gray-800 mb-3">
                                                        <span>
                                                            <span className="uppercase font-bold">Query Name : </span>Smart contract error
                                                        </span>
                                                        <span>
                                                            Ticket ID : <span className="text-black">#Loki5</span>
                                                        </span>
                                                        <span className="w-full md:w-auto text-gray-500 font-medium text-xs">
                                                            Mon, 02 May, 2025 - 02:30PM
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-gray-600 leading-relaxed mb-4">
                                                        <span className="font-bold text-black block mb-1">Description :</span>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                                        been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy
                                                        text of the printing and typesetting industry ever since the 1500s, Lorem Ipsum is simply
                                                        dummy text of the printing and typesetting industry ever since the 1500.
                                                        <span className="text-black font-semibold ml-1">READ MORE</span>
                                                    </div>

                                                    {/* Assignee Info */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm font-semibold text-gray-700 gap-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                                                            <span>Pratham Chaudhary</span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-xs text-gray-500 font-semibold">Status</span>
                                                            <span className="inline-block mt-1 px-3 py-1 bg-gray-300 text-gray-800 text-xs rounded">
                                                                IN PROGRESS
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-xs text-gray-500 font-semibold">Priority</span>
                                                            <span className="inline-block mt-1 text-sm text-black font-bold">HIGH</span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-xs text-gray-500 font-semibold">Completion Date</span>
                                                            <span className="inline-block mt-1 text-sm text-black font-bold">Thu, 05 May, 2025</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* Pagination */}
                                            <div className="flex justify-center items-center mt-4 space-x-2">
                                                <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded">Prev</button>
                                                {[1, 2, 3, 4, 5].map((page) => (
                                                    <button
                                                        key={page}
                                                        className={`px-3 py-1 rounded ${page === 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-900'
                                                            }`}
                                                    >
                                                        {page}
                                                    </button>
                                                ))}
                                                <button className="px-3 py-1 bg-gray-300 text-gray-900 rounded">Next</button>
                                            </div>

                                        </div>
                                    )}


                                </div>


                            </>
                        )}

                        {/* MATCHMAKING */}
                        {activeTab === "matchmaking" && (
                            <>
                                {/* Match Making Filters Panel */}
                                <div className="p-6 rounded-lg bg-gray-100">
                                    {/* Tabs */}
                                    <div className="flex gap-4 mb-6 font-serif text-lg font-semibold">
                                        <button
                                            className={`px-6 py-2 rounded-t-lg ${matchTab === 'newMatch' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'
                                                }`}
                                            onClick={() => setMatchTab('newMatch')}
                                        >
                                            NEW MATCH
                                        </button>
                                        <button
                                            className={`px-6 py-2 rounded-t-lg ${matchTab === 'matchHistory' ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-700'
                                                }`}
                                            onClick={() => setMatchTab('matchHistory')}
                                        >
                                            MATCH HISTORY
                                        </button>
                                    </div>

                                    {/* NEW MATCH Filters */}
                                    {matchTab === 'newMatch' && (
                                        <div className="bg-white p-6 rounded-b-lg shadow space-y-6 font-serif text-gray-800">

                                            {/* SEARCH FIELDS */}
                                            <div className="grid md:grid-cols-3 gap-4 items-center w-full">

                                                {/* ROLE DROPDOWN */}
                                                <div className="relative w-full">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDropdown('role')}
                                                        className="flex justify-between items-center w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-sm bg-white text-gray-800"
                                                    >
                                                        <span>
                                                            {selectedRoles.length > 0
                                                                ? selectedRoles.join(', ')
                                                                : 'All'}
                                                        </span>
                                                        <span className="text-xl">{openDropdown === 'role' ? '▴' : '▾'}</span>
                                                    </button>
                                                    {openDropdown === 'role' && (
                                                        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-64 overflow-y-auto">
                                                            {roleOptions.map((role) => (
                                                                <label
                                                                    key={role}
                                                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedRoles.includes(role)}
                                                                        onChange={() => toggleRole(role)}
                                                                        className="mr-2"
                                                                    />
                                                                    {role}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* SEARCH BAR WITH ICON */}
                                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm w-full">
                                                    <span className="text-gray-600 mr-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-4 w-4"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        placeholder="Search"
                                                        className="w-full bg-transparent outline-none text-sm placeholder-gray-500 text-gray-800"
                                                    />
                                                </div>

                                                {/* PURPOSE FIELD */}
                                                <input
                                                    type="text"
                                                    placeholder="For Purpose"
                                                    className="border border-gray-300 rounded-md px-4 py-2 shadow-sm text-sm w-full placeholder-gray-500 text-gray-800"
                                                />
                                            </div>

                                            {/* FILTERS */}
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">

                                                {/* Experience Filter with Toggle */}
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDropdown('experience')}
                                                        className="w-full text-left border border-gray-300 rounded-md px-4 py-2 shadow-sm text-sm bg-white text-gray-800 flex justify-between items-center"
                                                    >
                                                        {selectedExperience.length > 0 ? selectedExperience.join(', ') : 'Select Experience'}
                                                        <span className="text-xl">{openDropdown === 'experience' ? '▴' : '▾'}</span>
                                                    </button>
                                                    {openDropdown === 'experience' && (
                                                        <div className="absolute top-14 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20">
                                                            {experienceOptions.map((option) => (
                                                                <label
                                                                    key={option}
                                                                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedExperience.includes(option)}
                                                                        onChange={() => toggleExperience(option)}
                                                                        className="mr-2"
                                                                    />
                                                                    {option}
                                                                </label>
                                                            ))}
                                                            <div className="px-4 py-2 text-sm text-gray-500 cursor-pointer hover:underline">
                                                                More
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* LOCATION FILTER */}
                                                <div className="relative w-full">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDropdown('location')}
                                                        className="flex justify-between items-center w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-sm bg-white text-gray-800"
                                                    >
                                                        <span>
                                                            {selectedLocations.length > 0
                                                                ? selectedLocations.join(', ')
                                                                : 'Location'}
                                                        </span>
                                                        <span className="text-xl">{openDropdown === 'location' ? '▴' : '▾'}</span>
                                                    </button>
                                                    {openDropdown === 'location' && (
                                                        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-64 overflow-y-auto">
                                                            {locationOptions.map((location) => (
                                                                <label
                                                                    key={location}
                                                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedLocations.includes(location)}
                                                                        onChange={() => toggleLocation(location)}
                                                                        className="mr-2"
                                                                    />
                                                                    {location}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* SKILLS FILTER */}
                                                <div className="relative w-full">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDropdown('skills')}
                                                        className="flex justify-between items-center w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-sm bg-white text-gray-800"
                                                    >
                                                        <span>
                                                            {selectedSkills.length > 0
                                                                ? selectedSkills.join(', ')
                                                                : 'Skills'}
                                                        </span>
                                                        <span className="text-xl">{openDropdown === 'skills' ? '▴' : '▾'}</span>
                                                    </button>
                                                    {openDropdown === 'skills' && (
                                                        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-64 overflow-y-auto">
                                                            {skillsOptions.map((skill) => (
                                                                <label
                                                                    key={skill}
                                                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedSkills.includes(skill)}
                                                                        onChange={() => toggleSkill(skill)}
                                                                        className="mr-2"
                                                                    />
                                                                    {skill}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* AVAILABILITY FILTER */}
                                                <div className="relative w-full">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDropdown('availability')}
                                                        className="flex justify-between items-center w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm text-sm bg-white text-gray-800"
                                                    >
                                                        <span>
                                                            {selectedAvailability.length > 0
                                                                ? selectedAvailability.join(', ')
                                                                : 'Availability'}
                                                        </span>
                                                        <span className="text-xl">{openDropdown === 'availability' ? '▴' : '▾'}</span>
                                                    </button>
                                                    {openDropdown === 'availability' && (
                                                        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-64 overflow-y-auto">
                                                            {availabilityOptions.map((option) => (
                                                                <label
                                                                    key={option}
                                                                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
                                                                >
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedAvailability.includes(option)}
                                                                        onChange={() => toggleAvailability(option)}
                                                                        className="mr-2"
                                                                    />
                                                                    {option}
                                                                </label>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {/* BUTTONS */}
                                            <div className="flex justify-end gap-4 mt-4">
                                                <button className="bg-[#3C3C3B] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-black transition">
                                                    SEARCH RESULTS
                                                </button>
                                                <button className="bg-[#3C3C3B] text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-black transition">
                                                    ADD NEW FILTER
                                                </button>
                                                <button
                                                    className="bg-gray-200 text-gray-600 rounded-full px-6 py-2 text-sm font-semibold"
                                                    onClick={() => setShowResults(true)}
                                                >
                                                    MATCH
                                                </button>
                                            </div>
                                            {/* Conditional Match Results */}
                                            {showResults && (
                                                <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
                                                    {/* Left: Results */}
                                                    <div className="lg:col-span-3">
                                                        <div className="flex items-center gap-4 mb-4">
                                                            <input type="checkbox" />
                                                            <span className="text-sm font-semibold">SELECT ALL</span>
                                                            <span className="text-sm">Compare Selected 0</span>
                                                            <span className="text-sm">Match Found 0</span>
                                                            <span className="text-sm">Search Results 200 Employee</span>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                            {employees.map((emp, index) => (
                                                                <div key={index} className="bg-white shadow-md rounded-xl p-4 text-center relative">
                                                                    <input type="checkbox" className="absolute top-4 right-4" />
                                                                    <img src="/avatar.png" alt="profile" className="w-16 h-16 mx-auto rounded-full" />
                                                                    <h3 className="font-bold text-lg mt-2">{emp.name}</h3>
                                                                    <p className="text-gray-500 text-sm">{emp.position}</p>
                                                                    <p className="text-gray-500 text-sm">{emp.email}</p>
                                                                    <p className="text-gray-500 text-sm">{emp.experience}</p>
                                                                    <div className="mt-4">
                                                                        <p className="font-semibold text-gray-700">Match Result</p>
                                                                        <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                                                                            <div className="bg-[#3C3C3B] h-2 w-[0%] rounded-full"></div>
                                                                        </div>
                                                                        <p className="text-sm text-gray-700 mt-1">{emp.match}</p>
                                                                    </div>
                                                                    <div className="mt-4 flex justify-center gap-2">
                                                                        <button className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                                                                            View Profile
                                                                        </button>
                                                                        <button className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                                                                            Connect Chat
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    {/* Right: Filters */}
                                                    <div className="bg-white shadow-md rounded-xl p-4">
                                                        <h2 className="text-lg font-semibold mb-4">CATEGORIES</h2>
                                                        {Object.keys(selectedCategories).map((cat) => (
                                                            <div key={cat} className="mb-2">
                                                                <div
                                                                    className="flex justify-between items-center cursor-pointer"
                                                                    onClick={() => handleCategoryToggle(cat)}
                                                                >
                                                                    <label className="flex items-center gap-2 font-semibold">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={!!selectedCategories[cat]}
                                                                            onChange={() =>
                                                                                setSelectedCategories((prev) => ({
                                                                                    ...prev,
                                                                                    [cat]: !prev[cat],
                                                                                }))
                                                                            }
                                                                        />
                                                                        {cat}
                                                                    </label>
                                                                    <span>{expanded === cat ? '▲' : '▼'}</span>
                                                                </div>
                                                                {expanded === cat && (
                                                                    <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-700">
                                                                        <li>
                                                                            <label>
                                                                                <input type="checkbox" className="mr-2" /> User Flow
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label>
                                                                                <input type="checkbox" className="mr-2" /> Design
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label>
                                                                                <input type="checkbox" className="mr-2" /> Research
                                                                            </label>
                                                                        </li>
                                                                        <li>
                                                                            <label>
                                                                                <input type="checkbox" className="mr-2" /> Persona
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ))}
                                                        <button className="bg-gray-800 text-white w-full mt-4 py-2 rounded-md text-sm font-medium">
                                                            APPLY
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {/* MATCH HISTORY Table */}
                                    {matchTab === 'matchHistory' && (
                                        <div className="bg-white p-6 rounded-b-lg shadow">
                                            <h2 className="text-lg font-semibold mb-4 text-gray-900">Past Matches</h2>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full table-auto text-sm font-serif text-gray-800">
                                                    <thead className="bg-gray-100 text-gray-900">
                                                        <tr>
                                                            <th className="px-4 py-2 text-left">Name</th>
                                                            <th className="px-4 py-2 text-left">Position</th>
                                                            <th className="px-4 py-2 text-left">Experience</th>
                                                            <th className="px-4 py-2 text-left">Matched On</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">John Doe</td>
                                                            <td className="px-4 py-2">UI/UX Designer</td>
                                                            <td className="px-4 py-2">5 Years</td>
                                                            <td className="px-4 py-2">2024-09-12</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">Jane Smith</td>
                                                            <td className="px-4 py-2">Frontend Developer</td>
                                                            <td className="px-4 py-2">3 Years</td>
                                                            <td className="px-4 py-2">2024-09-10</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">Ravi Kumar</td>
                                                            <td className="px-4 py-2">Backend Developer</td>
                                                            <td className="px-4 py-2">4 Years</td>
                                                            <td className="px-4 py-2">2024-08-29</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">Lisa Wong</td>
                                                            <td className="px-4 py-2">Content Writer</td>
                                                            <td className="px-4 py-2">2 Years</td>
                                                            <td className="px-4 py-2">2024-08-25</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">Carlos Diaz</td>
                                                            <td className="px-4 py-2">Video Editor</td>
                                                            <td className="px-4 py-2">6 Years</td>
                                                            <td className="px-4 py-2">2024-08-21</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">Emily Johnson</td>
                                                            <td className="px-4 py-2">Graphic Designer</td>
                                                            <td className="px-4 py-2">3 Years</td>
                                                            <td className="px-4 py-2">2024-08-18</td>
                                                        </tr>
                                                        <tr className="border-t">
                                                            <td className="px-4 py-2">Aman Verma</td>
                                                            <td className="px-4 py-2">Marketing Strategist</td>
                                                            <td className="px-4 py-2">5 Years</td>
                                                            <td className="px-4 py-2">2024-08-12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}