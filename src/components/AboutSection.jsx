



const AboutSection = () => {


  return (
    <section className="bg-white rounded-xl h-[500px] mt-[200px] px-16" id="about">
         <h2 className="text-center text-4xl font-bold text-black pt-3 mb-1">
        About me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-5 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="../../public/images/1301_generated.jpg" width={320} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">

            Hello! I'm Mynuddin Chisty, a student with a focus on web technologies and aspiring to be a software developer.
            I enjoy translating ideas into user-friendly interfaces.
            Eager to apply my academic knowledge in real-world scenarios,
            I'm seeking opportunities to contribute to dynamic projects and further my skills in the ever-evolving field of software development.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;