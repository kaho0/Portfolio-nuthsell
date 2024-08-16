import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TagTalk",
    description: "A Blogging Website",
    image: "https://i.ibb.co/mbqsFSs/tagtalk.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/TagTalk",
    previewUrl: "https://tagtalk-5e7ed.web.app",
  },

  {
    id: 3,
    title: "Flavour Fusion",
    description: "A Food Ordering Website",
    image: "https://i.ibb.co/K9VGcMc/fl.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/Restuarant-management-project",
    previewUrl: "https://restaurant-management-e7db6.firebaseapp.com",
  },

  {
    id: 5,
    title: "Gamers Hub",
    description: "Simple Gaming static website",
    image: "https://i.ibb.co/rcbDG9Z/gamer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mchisty17/milestone-2-assignment",
    previewUrl: "https://github.com/mchisty17/GamersHub",
  },
  {
    id: 6,
    title: "ChatVid",
    description: "A video Chatting app",
    image: "https://i.ibb.co/K5jMmzS/c2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chistym17/ChatVid-Video-Chat-project",
    previewUrl: "https://mchisty17.pythonanywhere.com",
  },


];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="bg-white rounded-2xl py-12">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-[#EDA751] mb-6">
          Projects
        </h2>
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              className="bg-white rounded-lg custom-shadow custom-border overflow-hidden "
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
