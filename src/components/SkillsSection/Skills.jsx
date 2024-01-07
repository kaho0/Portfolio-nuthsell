
import { useEffect, useState } from 'react';
import SkillCard from './SkillsCard';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/Skills.json'); 
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className=" max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mr-24 ">
      {skills.map((skill, index) => (
        <SkillCard key={index} name={skill.name} image={skill.image} />
      ))}
    </div>
  );
};

export default Skills;