
const SkillsSection = () => {
  return (
    <section className="bg-white pt-12  mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-between">
          
          {/* Front-End */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 h-64 ">
              <h3 className="text-xl font-semibold mb-4 text-center">Front-End</h3>
              <ul className="list-disc list-inside ">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>

          {/* Back-End */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 h-64 ">
              <h3 className="text-xl font-semibold mb-4 text-center">Back-End</h3>
              <ul className="list-disc list-inside ">
                <li>Python</li>
                <li>Django</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>NextAuth</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>

          {/* Database */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 h-64 ">
              <h3 className="text-xl font-semibold mb-4 text-center">Database</h3>
              <ul className="list-disc list-inside ">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
              </ul>
            </div>
          </div>

          {/* Deployment */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 h-64 ">
              <h3 className="text-xl font-semibold mb-4 text-center">Deployment</h3>
              <ul className="list-disc list-inside ">
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
          </div>

          {/* Testing */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 h-64">
              <h3 className="text-xl font-semibold mb-4 text-center">Testing</h3>
              <ul className="list-disc list-inside">
                <li>Integration testing</li>
                <li>End-to-end testing</li>
              </ul>
            </div>
          </div>

          {/* Other */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 h-64 ">
              <h3 className="text-xl font-semibold mb-4 text-center">Other</h3>
              <ul className="list-disc list-inside ">
                <li>Data structures and algorithms</li>
                <li>Dynamic programming</li>
                <li>WebRTC</li>
                <li>WebSocket</li>
                <li>NextAuth</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
