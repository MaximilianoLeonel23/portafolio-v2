import photo from "../../assets/about/photo.jpg";
import githubLight from "../../assets/icons/github-light.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import githubDark from "../../assets/icons/github-dark.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";

interface Props {
  theme: string;
}
const About: React.FC<Props> = ({ theme }) => {
  return (
    <section id="about" className="container py-16">
      <div className="flex flex-col-reverse lg:flex-row gap-y-16 gap-x-16">
        <div className="flex items-start lg:items-end justify-start lg:justify-center">
          <img src={photo} className="w-2/3 lg:w-2/5 pb-8" />
        </div>
        <div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                Sobre mi
              </h4>
              <p
                className={`about-text-${theme} text-sm lg:text-base leading-6`}
              >
                Soy una persona disciplinada, organizada y eficiente en mi
                trabajo. Tengo paciencia y buena predisposición para aprender y
                busco constantemente desafiar mis habilidades. Me considero
                sobre todo un estudiante autodidacta.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                Formación y cursos
              </h4>
              <ul
                className={`about-text-${theme} text-sm lg:text-base leading-6`}
              >
                <li>Programación desde cero - Egg Educación</li>
                <li>Front End - EDteam</li>
                <li>Javascript Front End - Argentina Programa 4.0</li>
                <li>Full Stack Python - Codo a Codo</li>
                <li>FullstackOpen</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                Tecnologías
              </h4>
              <div className="columns-2 gap-x-8">
                <ul
                  className={`about-text-${theme} text-sm lg:text-base leading-6`}
                >
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>Typescript</li>
                  <li>Git</li>
                  <li>Sass</li>
                </ul>
                <ul
                  className={`about-text-${theme} text-sm lg:text-base leading-6`}
                >
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Jest</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                Contacto
              </h4>
              <ul className="flex gap-x-4">
                <li>
                  <a
                    href="https://github.com/MaximilianoLeonel23"
                    target="_blank"
                  >
                    <div className="h-8 w-8 ">
                      <img
                        src={theme === "light" ? githubLight : githubDark}
                        className={
                          theme === "light"
                            ? "hover:brightness-75 transition duration-300"
                            : "hover:brightness-125 transition duration-300"
                        }
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/maximiliano-leonel-p%C3%A9rez-8846b826a/"
                    target="_blank"
                  >
                    <div className="h-8 w-8 ">
                      <img
                        src={theme === "light" ? linkedinLight : linkedinDark}
                        className={
                          theme === "light"
                            ? "hover:brightness-75 transition duration-300"
                            : "hover:brightness-125 transition duration-300"
                        }
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
