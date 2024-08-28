// eslint-disable-next-line react/prop-types
const ProjectSection = ({ name, type, techStack, description, githubLink, liveLink, images }) => {
    return (
        <div className=" flex flex-col md:flex-row bg-white p-4 sm:p-6 mb-2 mb:mb-6 rounded-lg shadow-lg">
            {/* Left Side: Project Description */}
            <div className="w-full md:w-[60%] mb-4 md:mb-0">
                {/* Project Name and Links */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#EDA751]">{name}</h2>
                </div>

                {/* Project Type */}
                <p className="text-gray-600 italic mb-2 sm:mb-4">{type}</p>

                {/* Tech Stack */}
                <p className="text-gray-800 font-semibold mb-4 sm:mb-6">
                    Technology Used: {techStack}
                </p>

                {/* Project Description with Bullet Points */}
                <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-3">
                    {description.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>

                <div className="flex space-x-4 sm:space-x-6 mt-6 sm:mt-10 ml-12 md:ml-0">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-[#EDA751] px-4 sm:px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
                    >
                        GitHub
                    </a>
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-[#EDA751] px-5 sm:px-6 py-2 rounded-md shadow-md font-medium transition duration-200"
                    >
                        Live
                    </a>
                </div>
            </div>





            {/* Right Side: Photo Collage */}
            <div className="w-full md:w-[40%] flex flex-col justify-between">
                {/* Single Image on Small Devices */}
                <div className="w-full p-1 sm:hidden">
                    <img
                        src={images[0]}  
                        alt="Project Image"
                        className="rounded-lg object-cover w-full h-40 sm:h-60 md:h-full border-4"
                        style={{ borderColor: '#EDA751' }}
                    />
                </div>

                {/* Collage on Medium to Large Devices */}
                <div className="hidden sm:flex flex-col sm:flex-row space-x-0 sm:space-x-2 mb-2">
                    <div className="w-full sm:w-1/2 p-1 mb-2 sm:mb-0">
                        <img
                            src={images[0]}
                            alt={`Project Image 1`}
                            className="rounded-lg object-cover w-full h-32 sm:h-40 md:h-full border-4"
                            style={{ borderColor: '#EDA751' }}
                        />
                    </div>
                    <div className="w-full sm:w-1/2 p-1">
                        <img
                            src={images[1]}
                            alt={`Project Image 2`}
                            className="rounded-lg object-cover w-full h-32 sm:h-40 md:h-full border-4"
                            style={{ borderColor: '#EDA751' }}
                        />
                    </div>
                </div>
                <div className="hidden sm:flex w-full p-1">
                    <img
                        src={images[2]}
                        alt={`Project Image 3`}
                        className="rounded-lg object-cover w-full h-40 sm:h-60 md:h-full border-4"
                        style={{ borderColor: '#EDA751' }}
                    />
                </div>
            </div>



        </div>
    );
};

export default ProjectSection;
