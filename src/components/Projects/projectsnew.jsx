import ProjectSection from './seconddiv';

const MyPortfolio = () => {
  const project = {
    name: 'PayLink - Secure Wallet App',
    type: 'Advanced Digital Wallet Solution',
    techStack: 'Monorepo, Next.js, NextAuth, Express, Postgres, Prisma, Docker, AWS',
    description: [
      'Engineered a comprehensive digital wallet solution, enabling secure and seamless fund transfers between bank accounts and wallet balances.',
      'Architected a sophisticated three-tier system comprising a User Application for customer interaction, a Bank Application for transaction management, and a Bank Webhook service for real-time transaction notifications.',
      'Leveraged CI/CD pipelines to automate deployment processes, ensuring continuous delivery of updates. Dockerized all services for consistent environments, and deployed the entire solution on AWS EC2 instances for scalable and reliable performance.'
    ],
    githubLink: 'https://github.com/your-repo',
    liveLink: 'https://your-live-site.com',
    images: [
      '../../../public/images/pay1.png',
      '../../../public/images/pay2.png',
      '../../../public/images/pay3.png'
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
