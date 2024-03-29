import html5 from "../../assets/devskills/html5.svg";
import css3 from "../../assets/devskills/css3.svg";
import javascript from "../../assets/devskills/javascript.svg";
import reactjs from "../../assets/devskills/reactjs.svg";
import sass from "../../assets/devskills/sass.svg";
import tailwindcss from "../../assets/devskills/tailwindcss.svg";
import git from "../../assets/devskills/git.svg";
import bootstrap from "../../assets/devskills/bootstrap.svg";
import typescript from "../../assets/devskills/typescript.svg";
import nodejs from "../../assets/devskills/nodejs.svg";
import jest from "../../assets/devskills/jest.svg";
import mongodb from "../../assets/devskills/mongodb.svg";
import firebase from "../../assets/devskills/firebase.svg";
import cypress from "../../assets/devskills/cypress.svg";
import mysql from "../../assets/devskills/mysql.svg";

import Tech from "../molecules/Tech.js";

interface Props {
  theme: string;
}
const Banner: React.FC<Props> = ({ theme }) => {
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
    nodejs,
    mysql,
    mongodb,
    firebase,
    jest,
    cypress,
  ];

  return (
    <section
      className={`py-8 lg:py-20 banner-${theme} overflow-hidden relative whitespace-nowrap slider slider-${theme}`}
    >
      <div className="slider-track">
        {technologies.map((item: string) => {
          return <Tech source={item} key={item} />;
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
