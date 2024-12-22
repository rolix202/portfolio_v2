import React from "react";
import CountUp from "react-countup";
import { BriefcaseIcon, ClipboardDocumentCheckIcon, UserGroupIcon, } from "@heroicons/react/24/outline";

const stats = [
    { value: 3, suffix: "+", label: "Years of Experience", icon: <BriefcaseIcon className="w-8 h-8 text-purple-500" /> },
    { value: 8, suffix: "+", label: "Clients Worked With", icon: <UserGroupIcon className="w-8 h-8 text-purple-500" /> },
    { value: 15, suffix: "+", label: "Projects Delivered", icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-purple-500" /> },
];

const StatCard = ({ value, suffix, label, icon }) => (
    <div className="relative flex gap-6 items-center p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black transform hover:scale-105 transition-all duration-300">
        
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 bg-opacity-10 mb-4">
            {icon}
        </div>

        {/* Count-Up */}
        <div>
            <h3 className="text-4xl font-bold text-white">
                <CountUp start={0} end={value} duration={2.5} />{suffix}
            </h3>
            <p className="mt-2 text-gray-400 text-lg">{label}</p>
            {/* Decorative Line */}
            <div className="mt-4 w-10 h-1 bg-purple-500"></div>
        </div>

    </div>
);

const HeroStats = () => {
    return (
        <div className="w-full py-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {stats.map((stat, idx) => (
                    <StatCard key={idx} {...stat} />
                ))}
            </div>
        </div>
    );
};

export default HeroStats;
