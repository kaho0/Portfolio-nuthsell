import ProjectSection from './secprojectsection';

const YouVidProject = () => {
    const project = {
        name: 'YouVid - A Simple YouTube Clone',
        type: 'Video Streaming Platform',
        techStack: 'ReactJS, JavaScript, HTML, Tailwind CSS, Node.js, Rapid API',
        description: [
          'Search Videos: Utilize a powerful search feature to find specific videos.',
          'Category-wise Videos: Browse videos based on different categories.',
          'Watch Videos: Enjoy watching videos directly on the website.',
          'See Channels: Explore and view information about various channels.',
          'Video Likes and Views: Track the popularity of videos with like and view counts.'
        ],
        githubLink: 'https://github.com/your-repo',
        liveLink: 'https://your-live-site.com',
        images: [
          '/you3.png',
          '/you2.png',
          '/you1.png'
        ]
      };

    return (
      <div className="container mx-auto mt-[20px] ">
     

        {/* Description Section */}
        <div className="">
          <ProjectSection
            name={project.name}
            type={project.type}
            techStack={project.techStack}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            images={project.images}

          />
        </div>
      </div>
    );
};

export default YouVidProject;
