import { IProject } from "../../helper/projectsData";
import SkillTag from "../atoms/SkillTag";
import { motion } from "framer-motion";

interface Props {
  project: IProject;
  theme: string;
}

const Project: React.FC<Props> = ({ project, theme }) => {
  const {
    id,
    title,
    link,
    shortLink,
    source,

    description,
    skills,
  } = project;

  return (
    <motion.article
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`project-border-${theme} border-b py-4`}
    >
      <div className="columns-1 lg:columns-2 gap-32">
        <div className="flex justify-between">
          <p className={`w-1/4 tracking-widest project-num-${theme}`}>
            {id.padStart(2, "0")}
          </p>
          <motion.div
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.4 }}
            className="w-3/4 -mt-2"
          >
            <a href={link} target="_blank">
              <img src={source} className="rounded" />
            </a>
          </motion.div>
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
          <div className="flex flex-wrap gap-2">
            {skills.map((tag) => {
              return <SkillTag tag={tag} theme={theme} />;
            })}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
