import { IProject } from "../../helper/projectsData";

interface Props {
  project: IProject;
  theme: string;
}

const Project: React.FC<Props> = ({ project, theme }) => {
  const { id, title, link, shortLink, source, desktop, mobile, description } =
    project;
  return (
    <article className={`project-border-${theme} border-b py-4`}>
      <div className="columns-1 lg:columns-2 gap-32">
        <div className="flex justify-between">
          <p className={`w-1/4 project-num-${theme}`}>0{id}</p>
          <div className="w-3/4 -mt-2">
            <a href={link} target="_blank">
              <img src={source} className="rounded" />
            </a>
          </div>
        </div>
        <div className="py-8 pl-[25%] lg:pl-0 flex flex-col gap-y-4">
          <h4 className={`project-title-${theme} font-semibold text-xl`}>
            {title}
          </h4>
          <p className={`project-description-${theme} font-normal text-sm `}>
            {description}
          </p>
          <a
            href={link}
            className={`project-link-${theme} font-normal text-sm hover:underline underline-offset-4`}
            target="_blank"
          >
            {shortLink}
          </a>
          <div className="flex gap-4">
            {desktop && (
              <p
                className={`project-label-${theme} px-4 py-1.5 rounded text-sm`}
              >
                desktop
              </p>
            )}
            {mobile && (
              <p
                className={`project-label-${theme} px-4 py-1.5 rounded text-sm`}
              >
                mobile
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
