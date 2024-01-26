import SkillsDisplay from './SkillsDisplay';

const MySkillsPage = () => {
    // Skills data
    const skillsData = [
        {
            title: 'Front-End',
            skills: ['React', 'Javascript', 'Html', 'Css']
        },
        {
            title: 'Back-End',
            skills: ['Python', 'Django', 'Django Rest Framework', 'NodeJs', 'ExpressJs']
        },
        {
            title: 'Database',
            skills: ['MySql', 'Mongodb']
        },
        {
            title: 'Comfortable',
            skills: ['Data structures and Algorithms', 'Dynamic Programming']
        },
        {
            title: 'Language',
            skills: ['Python', 'C++', 'C', 'Javascript']
        },
        {
            title: 'Tools',
            skills: ['Github', 'Vs Code', 'Postman', 'Netlifly', 'Surge', 'Python anywhere', 'Figma']
        }
    ];

    return (
        <div className="container mx-auto mt-10">
            <SkillsDisplay skillsData={skillsData} />
        </div>
    );
};

export default MySkillsPage;
