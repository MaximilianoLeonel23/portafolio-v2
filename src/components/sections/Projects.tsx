import Project from "../organism/Project";

const Projects = () => {
  return (
    <section id="projects" className="container py-24">
      <div className="flex flex-col gap-y-8">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
