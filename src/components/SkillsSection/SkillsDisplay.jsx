/* eslint-disable react/prop-types */


const SkillsDisplay = ({ skillsData }) => {
    return (
        <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            {skillsData.map((category, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p>{category.skills.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillsDisplay;

