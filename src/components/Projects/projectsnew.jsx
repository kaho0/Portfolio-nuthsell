import ProjectSection from './projectdiv';

const MyPortfolio = () => {
  const project = {
    name: 'PayLink - A wallet app',
    type: 'Secure wallet app',
    techStack: 'Monorepo, Next.js, NextAuth, Express, Postgres, Prisma, Docker, AWS',
    description: [
      'Built a secure wallet app. Users can transfer funds between bank and wallet.',
      'Designed 3-tier architecture: User App, Bank App, & Bank Webhook.',
      'Automated deployments with CI/CD. Dockerized & deployed on EC2.'
    ],
    githubLink: 'https://github.com/your-repo',
    liveLink: 'https://your-live-site.com',
    images: [
      '/path/to/image1.jpg',
      '/path/to/image2.jpg'
    ]
  };

  return (
    <div className="container mx-auto mt-2">
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
  );
};

export default MyPortfolio;
