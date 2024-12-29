// "use client";
import React, { useState, useCallback, useMemo } from "react";
// import Room from '../components/room'
import Profile from './Profile.jsx'
import AddBusiness from './AddBusiness.jsx'
import MyBusiness from './MyBusiness.jsx'
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
    ArrowLeft,
    ArrowLeftCircle,
    BriefcaseBusiness,
    Plus,
    Settings,
    User,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Define links outside the component to prevent re-creation on each render


// Memoize Logo component
// const MemoizedLogo = React.memo(Logo);

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("Profile");
    const [open, setOpen] = useState(false);
    const links = [
        {
            label: "Profile",
            href: "#",
            icon: (
                <User className={`h-5 w-5 flex-shrink-0 ${activeComponent === "Profile" ? "text-white" : "text-neutral-700 dark:text-neutral-200"}`} />
            ),
            component: "Profile",
        },
        {
            label: "Add Bussiness",
            href: "#",
            icon: (
                <Plus className={`h-5 w-5 flex-shrink-0 ${activeComponent === "Add Business" ? "text-white" : "text-neutral-700 dark:text-neutral-200"}`} />
            ),
            component: "Add Business",
        },
        {
            label: "My Business",
            href: "#",
            icon: (
                <BriefcaseBusiness className={`h-5 w-5 flex-shrink-0 ${activeComponent === "My Business" ? "text-white" : "text-neutral-700 dark:text-neutral-200"}`} />
            ),
            component: "My Business",
        }
    ];

    // Memoize the handler to set active component
    const handleSetActiveComponent = useCallback((component) => {
        setActiveComponent(component);
    }, []);

    // Handler for adding a room


    // Memoize renderComponent to prevent re-definition on each render
    const renderComponent = useCallback(() => {
        switch (activeComponent) {
            case "Add Business":
                return <AddBusiness />;
            case "Profile":
                return <Profile />; // Pass the handler here
            case "My Business":
                return <MyBusiness />;
            // case "Analytics":
            //     return <Analytics />;
            // case "Logout":
            //     return <Logout />;
            default:
                return <Profile />;
        }
    }, [activeComponent]);

    return (
        <div
            className={cn(
                " flex flex-col md:flex-row bg-gray-100   flex-1 w-full   overflow-hidden",
                "h-[100vh]"
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10 bg-black">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {/* <MemoizedLogo /> */}
                        <Logo/>
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                   className={activeComponent === link.component ? "items-start text-red-700  " : ""}
                                                                       onClick={() => handleSetActiveComponent(link.component)}
                                />
                            ))}
                        </div>
                    </div>
                    <div>

                    </div>
                </SidebarBody>
            </Sidebar>
            {/* Render the active component */}
            <div className="flex flex-col flex-1 ">{renderComponent()}</div>
        </div>
    );
}

export default Dashboard;



export const Logo = () => {
    return (
        <Link
            to="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <div className="h-5 w-6  bg-gradient-to-r from-pink-500 to-yellow-300   rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            <p className="text-white  -left-[1.59rem] relative font-bold text-lg">T</p>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pl-2 font-medium text-white  whitespace-pre"

            >
                Testimonials
            </motion.span>
        </Link>
    );
};

export const LogoIcon = () => {
    return (
        <Link
            to="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            T
            {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
        </Link>
    );
};
// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard