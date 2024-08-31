const skills = {
    frontend: [
      { name: 'NextJs', imageUrl: 'images/4a2be73b1e2efb44355436c40bf496dd.jpg' },
      { name: 'TypeScript', imageUrl: 'skills/typescript.png' },
      { name: 'React', imageUrl: 'skills/1174949_js_react js_logo_react_react native_icon.png' },
      { name: 'JavaScript', imageUrl: 'skills/652581_code_command_develop_javascript_language_icon.png' },
      { name: 'HTML', imageUrl: 'skills/317755_badge_html_html5_achievement_award_icon.png' },
      { name: 'CSS', imageUrl: 'skills/317756_badge_css_css3_achievement_award_icon.png' },
    ],
    backend: [
      { name: 'Python', imageUrl: 'skills/4375050_logo_python_icon.png' },
      { name: 'Django', imageUrl: 'skills/9118014_django_fill_icon.png' },
      { name: 'Django Rest', imageUrl: 'skills/Django REST.png' },
      { name: 'Node.js', imageUrl: 'skills/1012818_code_development_logo_nodejs_icon.png'},
      { name: 'Express.js', imageUrl: 'skills/icons8-express-js-50.png' },
      { name: 'NextAuth', imageUrl: 'skills/download.jpeg' },
    ],
    databases: [
      { name: 'MySQL', imageUrl: 'skills/1012821_code_development_logo_mysql_icon.png' },
      { name: 'MongoDB', imageUrl: 'skills/1012822_code_development_logo_mongodb_programming_icon.png' },
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
    languages: [
      { name: 'C', imageUrl: 'https://i.ibb.co/sJDVdZ9/icons8-c-48-1.png' },
      { name: 'C++', imageUrl: 'skills/7564189_c_logo_plus plus_plus_+ +_icon.png' },
      { name: 'Python', imageUrl: 'skills/4375050_logo_python_icon.png' },
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
    <div className="mb-8 custom-border rounded-xl p-4">
      <h3 className="text-xl font-semibold mb-4 text-[#EDA751] text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-1 px-2 sm:px-4 md:px-6">
        {skillsArray.map((skill, index) => (
          <SkillItem key={index} name={skill.name} imageUrl={skill.imageUrl} />
        ))}
      </div>
    </div>
  );
  
  const SkillsSection = () => {
    return (
      <section className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg mt-10 mb-10">
        <h2 className="text-3xl font-bold text-[#EDA751] mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillSection title="Frontend" skillsArray={skills.frontend} />
          <SkillSection title="Backend" skillsArray={skills.backend} />
          <SkillSection title="Databases" skillsArray={skills.databases} />
          <SkillSection title="Deployment & Other Tools" skillsArray={skills.deployment} />
          <SkillSection title="Programming Languages" skillsArray={skills.languages} />
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  