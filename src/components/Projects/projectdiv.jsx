
const ProjectSection = ({ name, type, techStack, description, githubLink, liveLink, images }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white p-6 mb-6 rounded-lg shadow-lg">
            {/* Left Side: Project Description */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                {/* Project Name and Links */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

                </div>

                {/* Project Type */}
                <p className="text-gray-600 italic mb-2">{type}</p>

                {/* Tech Stack */}
                <p className="text-gray-800 font-semibold mb-4">
                    Technology Used: {techStack}
                </p>

                {/* Project Description with Bullet Points */}
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {description.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
                <div className="flex space-x-4">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Live
                    </a>
                </div>
            </div>

            {/* Right Side: Project Images */}
            <div className="w-full md:w-1/2 flex flex-wrap justify-center">
                {images.map((image, index) => (
                    <div key={index} className="w-1/2 p-2">
                        <img
                            src={image}
                            alt={`Project Image ${index + 1}`}
                            className="rounded-lg object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProjectSection;
