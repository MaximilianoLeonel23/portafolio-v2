import html5 from "../../assets/devskills/html5.svg";
import css3 from "../../assets/devskills/css3.svg";
import javascript from "../../assets/devskills/javascript.svg";
import reactjs from "../../assets/devskills/reactjs.svg";
import sass from "../../assets/devskills/sass.svg";
import tailwindcss from "../../assets/devskills/tailwindcss.svg";
import git from "../../assets/devskills/git.svg";
import bootstrap from "../../assets/devskills/bootstrap.svg";
import typescript from "../../assets/devskills/typescript.svg";
import Tech from "../molecules/Tech.js";

const Banner: React.FC = () => {
  const technologies: string[] = [
    html5,
    css3,
    javascript,
    reactjs,
    sass,
    tailwindcss,
    git,
    bootstrap,
    typescript,
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative whitespace-nowrap slider">
      <div className="slider-track">
        {technologies.map((item: string) => {
          return <Tech source={item} />;
        })}
      </div>
      <div className="slider-track">
        {technologies.map((item: string) => {
          return <Tech source={item} />;
        })}
      </div>
    </section>
  );
};

export default Banner;
