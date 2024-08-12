import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProjectsSection from '../../components/ProjectSection'; // Import your ProjectsSection component

const ViewAllProjectsButton = () => {
    const [showProjects, setShowProjects] = useState(false);

    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <button
                onClick={toggleProjects}
                className="flex items-center bg-white text-[#EDA751] border border-[#EDA751] hover:bg-[#EDA751] hover:text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-200"
            >
                {showProjects ? 'Hide Projects' : 'View All Projects'}
                <span className="ml-2">
                    {showProjects ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>

            {showProjects && (
                <div className="w-full mt-8">
                    <ProjectsSection />
                </div>
            )}
        </div>
    );
};

export default ViewAllProjectsButton;
