import Project from "../organism/Project";
import { projectsEs, projectsEn } from "../../helper/projectsData";
import { IProject } from "../../helper/projectsData";
import { useState } from "react";
import { useLanguage } from "../../context/language.context";

interface Props {
  theme: string;
}

const Projects: React.FC<Props> = ({ theme }) => {
  const initialVisibleCount: number = 3;
  const [visibleCount, setVisibleCount] = useState<number>(initialVisibleCount);

  const handleShowMore = (): void => {
    setVisibleCount(visibleCount + 3);
  };

  const { language } = useLanguage();
  return (
    <section
      id="projects"
      className="container flex flex-col items-center py-24"
    >
      <div className="flex flex-col  gap-y-8">
        {language === "es"
          ? projectsEs.slice(0, visibleCount).map((project: IProject) => {
              return (
                <Project theme={theme} key={project.id} project={project} />
              );
            })
          : projectsEn.slice(0, visibleCount).map((project: IProject) => {
              return (
                <Project theme={theme} key={project.id} project={project} />
              );
            })}
      </div>
      {language === "es"
        ? visibleCount < projectsEs.length && (
            <div className="pt-8">
              <button
                type="button"
                className={`projects-btn projects-btn-${theme}`}
                onClick={handleShowMore}
              >
                <span>Más proyectos</span>
              </button>
            </div>
          )
        : visibleCount < projectsEn.length && (
            <div className="pt-8">
              <button
                type="button"
                className={`projects-btn projects-btn-${theme}`}
                onClick={handleShowMore}
              >
                <span>More projects</span>
              </button>
            </div>
          )}
    </section>
  );
};

export default Projects;
