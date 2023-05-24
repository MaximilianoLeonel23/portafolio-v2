import Project from "../organism/Project";
import projectsData from "../../helper/projectsData";
import { IProject } from "../../helper/projectsData";
import { useState } from "react";

interface Props {
  theme: string;
}

const Projects: React.FC<Props> = ({ theme }) => {
  const initialVisibleCount: number = 3;
  const [visibleCount, setVisibleCount] = useState<number>(initialVisibleCount);

  const handleShowMore = (): void => {
    setVisibleCount(visibleCount + 3);
  };
  return (
    <section
      id="projects"
      className="container flex flex-col items-center py-24"
    >
      <div className="flex flex-col  gap-y-8">
        {projectsData.slice(0, visibleCount).map((project: IProject) => {
          return <Project theme={theme} key={project.id} project={project} />;
        })}
      </div>
      {visibleCount < projectsData.length && (
        <div className="pt-8">
          <button
            type="button"
            className={`projects-btn-${theme} py-3 px-6 lg:py-4 lg:px-8 text-sm lg:text-base  border  transition duration-300`}
            onClick={handleShowMore}
          >
            Más proyectos
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
