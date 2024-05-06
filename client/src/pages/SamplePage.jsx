import { useState } from "react";
import DropDownNavBar from "../components/DropDownNavBar"; // Assuming this is the correct import for the DropdownNavBar component
import SideBar from "../components/SideBar"; // Assuming this is the correct import for the Sidebar component

function SamplePage() {
    const [mobileView] = useState(window.innerWidth < 768);
    
    return (
        <div className="flex flex-row">
            <div>
                {mobileView ? <DropDownNavBar /> : <SideBar />}
            </div>
            <div className="flex flex-col items-center mx-auto">
                <h1 className="text-3xl mt-4">User Details</h1>
                <div className="h-24 w-24 rounded-full bg-gray-300 mt-12"></div>
                <p className="mt-4">User Name</p>
                <a href="#" className="text-gray-500 mt-2 underline">View Profile</a>
                <div className="mt-2 flex flex-row">
                    <div className="mr-2">
                        <label htmlFor="email" className="block text-gray-600">Email:</label>
                        <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-600">Password:</label>
                        <input type="password" id="password" name="password" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>
                <div className="mt-2 flex flex-row">
                    <div className="mr-4">
                        <label htmlFor="answer" className="block text-gray-600">Username:</label>
                        <input type="text" id="answer" name="answer" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="question" className="block text-gray-600">Age:</label>
                        <textarea id="question" name="question" rows="4" cols="50" className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SamplePage;
