
import { useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Structure and Algorithms</li>
        <li>ReactJs</li>
        <li>Django</li>
        <li>MongoDB</li>
        <li>MySql</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science and Telecommunication Engineering</li>
        <li>Noakhali Science and Technology University</li>
      </ul>
    ),
  },

  {
    title: "Data Structures",
    id: "data-structures",
    content: (
      <ul className="list-disc pl-2">
        <li>Arrays</li>
        <li>Linked Lists</li>
        <li>Stacks</li>
        <li>Queues</li>
        <li>Trees</li>
        <li>Graphs</li>
        <li>Hash Tables</li>
        <li>Heaps</li>
      </ul>
    ),
  },

{
    title: "Algorithms",
    id: "algorithms",
    content: (
      <ul className="list-disc pl-2">
        <li>Searching Algorithms (Linear Search, Binary Search)</li>
        <li>Sorting Algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort)</li>
        <li>Graph Algorithms (Breadth-First Search, Depth-First Search, Dijkstra's Algorithm, Bellman-Ford Algorithm, Kruskal's Algorithm, Prim's Algorithm)</li>
        <li>Dynamic Programming</li>
        <li>Greedy Algorithms</li>
        <li>Divide and Conquer</li>
        <li>Backtracking</li>
      </ul>
    ),
  },




  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);

  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">

            Hello! I'm Mynuddin Chisty, a student with a focus on web technologies and aspiring to be a software developer.
            I enjoy translating ideas into user-friendly interfaces.
            Eager to apply my academic knowledge in real-world scenarios,
            I'm seeking opportunities to contribute to dynamic projects and further my skills in the ever-evolving field of software development.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("data-structures")}
              active={tab === "data-structures"}
            >
              {" "}
              Data Structures{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("algorithms")}
              active={tab === "algorithms"}
            >
              {" "}
              Algorithms{" "}
            </TabButton>


          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;