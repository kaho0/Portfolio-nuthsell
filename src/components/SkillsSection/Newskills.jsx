
const skills = {
    frontend: [
        { name: 'NextJs', imageUrl: 'images/4a2be73b1e2efb44355436c40bf496dd.jpg' },
        { name: 'TypeScript', imageUrl: 'skills/typescript.png' },
        { name: 'React', imageUrl: 'https://i.ibb.co/2MxNtz7/icons8-react-native-48.png' },
        { name: 'JavaScript', imageUrl: 'https://i.ibb.co/d6WyDs9/icons8-javascript-48.png' },
        { name: 'HTML', imageUrl: 'https://i.ibb.co/XDzRMhB/icons8-html-48.png' },
        { name: 'CSS', imageUrl: 'https://i.ibb.co/p01gJtt/icons8-css-48.png' },
    ],
    backend: [
        { name: 'Python', imageUrl: 'https://i.ibb.co/ng4sbZF/python-5968350.png' },
        { name: 'Django', imageUrl: 'https://i.ibb.co/1Jz1V0p/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-48.png' },
        { name: 'Django Rest', imageUrl: 'skills/Django REST.png' },
        { name: 'Node.js', imageUrl: 'https://i.ibb.co/DtZr2j2/icons8-nodejs-48.png' },
        { name: 'Express.js', imageUrl: 'skills/icons8-express-js-50.png' },
        { name: 'NextAuth', imageUrl: 'skills/download.jpeg' },
    ],
    databases: [
        { name: 'MySQL', imageUrl: 'https://i.ibb.co/HNWhJ1q/icons8-mysql-48.png' },
        { name: 'MongoDB', imageUrl: 'https://i.ibb.co/sCd8yM9/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png' },
        { name: 'PostgreSQL', imageUrl: 'skills/elephant.png' },
        { name: 'Prisma', imageUrl: 'skills/icons8-prisma-orm-48.png' },
    ],
    deployment: [
        { name: 'Docker', imageUrl: 'skills/docker.png' },
        { name: 'AWS', imageUrl: 'skills/icons8-aws-logo-48.png' },
        { name: 'CI/CD', imageUrl: 'skills/ci-cd-svgrepo-com (1).svg' },
        { name: 'WebRTC', imageUrl: 'skills/webrtc.png' },
        { name: 'WebSocket', imageUrl: 'skills/websocket.png' },
    ],
    Languages: [
        { name: 'C', imageUrl: 'https://i.ibb.co/sJDVdZ9/icons8-c-48-1.png' },
        { name: 'C++', imageUrl: 'https://i.ibb.co/1TQFwMn/icons8-c-48.png' },
        { name: 'Python', imageUrl: 'https://i.ibb.co/ng4sbZF/python-5968350.png' },
        { name: 'Rust', imageUrl: 'images/images.png' },
    ]
};

const SkillItem = ({ name, imageUrl }) => (
    <div className="flex flex-col items-center justify-center rounded-lg p-4 h-20 w-20">
        <img src={imageUrl} alt={name} className="w-16 h-16 mb-2 object-contain" />
        <p className="text-center text-md text-gray-800">{name}</p>
    </div>
);

const SkillSection = ({ title, skillsArray }) => (
    <div className="mb-8 custom-border rounded-xl  p-4">
        <h3 className="text-xl font-semibold mb-4  text-[#EDA751] text-center " >{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 mt-1 px-10 ">
            {skillsArray.map((skill, index) => (
                <SkillItem key={index} name={skill.name} imageUrl={skill.imageUrl} />
            ))}
        </div>
    </div>
);

const SkillsSection = () => {
    return (
        <section className="bg-white p-10 rounded-lg shadow-lg mt-10 mb-10">
            <h2 className="text-3xl font-bold text-[#EDA751] mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
                <SkillSection title="Frontend" skillsArray={skills.frontend} />
                <SkillSection title="Backend" skillsArray={skills.backend} />
                <SkillSection title="Databases" skillsArray={skills.databases} />
                <SkillSection title="Deployment & Other Tools" skillsArray={skills.deployment} />
                <SkillSection title="Programming Languges" skillsArray={skills.Languages} />

            </div>
        </section>
    );
};

export default SkillsSection;
