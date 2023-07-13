import photo from "../../assets/about/profile.png";
import githubLight from "../../assets/icons/github-light.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import githubDark from "../../assets/icons/github-dark.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";
import { useLanguage } from "../../context/language.context";

interface Props {
  theme: string;
}
const About: React.FC<Props> = ({ theme }) => {
  const { language } = useLanguage();
  return (
    <section id="about" className="container py-24">
      <div className="flex flex-col-reverse lg:flex-row gap-y-16 gap-x-32">
        <div className={`hidden sm:flex items-start lg:justify-center`}>
          <div
            className={`w-1/2 sm:w-auto border-4 about-photo-${theme} p-2 rounded-full`}
          >
            <img src={photo} className="rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                {language === "es" ? "Sobre mi" : "About me"}
              </h4>
              <p
                className={`about-text-${theme} text-sm lg:text-base leading-6`}
              >
                {language === "es"
                  ? "Soy una persona disciplinada, organizada y eficiente en mi trabajo. Tengo paciencia y buena predisposición para aprender nuevas herramientas. Me gustan los desafíos intelectuales que ponen a prueba mi capacidad de resolución de problemas. Me considero sobre todo un estudiante autodidacta"
                  : "I am a disciplined, organized, and efficient person in my work. I have patience and a willingness to learn new tools. I enjoy intellectual challenges that test my problem-solving abilities. Above all, I consider myself a self-taught student."}
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                {language === "es" ? "Formación y cursos" : "Education"}
              </h4>
              <ul
                className={`about-text-${theme} text-sm lg:text-base leading-6`}
              >
                {language === "es" ? (
                  <>
                    <li>Programación desde cero - Egg Educación</li>
                    <li>Desarrollo Frontend con Javascript y React - EDteam</li>
                    <li>Javascript Frontend - Argentina Programa 4.0</li>
                    <li>Fullstack Python - Codo a Codo</li>
                    <li>FullstackOpen</li>
                  </>
                ) : (
                  <>
                    <li>Programming From Scratch - Egg Education</li>
                    <li>
                      Front End Development with JavaScript and React- EDteam
                    </li>
                    <li>Javascript Frontend - Argentina Programa 4.0</li>
                    <li>Fullstack Python - Codo a Codo</li>
                    <li>FullstackOpen</li>
                  </>
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                {language === "es" ? "Tecnologías" : "Skills"}
              </h4>
              <div className="columns-2 gap-x-8">
                <ul
                  className={`about-text-${theme} text-sm lg:text-base leading-6`}
                >
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Typescript</li>
                  <li>Next.js</li>
                  <li>Git</li>
                </ul>
                <ul
                  className={`about-text-${theme} text-sm lg:text-base leading-6`}
                >
                  <li>Sass</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Jest</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <h4
                className={`about-title-${theme} font-semibold  text-lg lg:text-xl`}
              >
                {language === "es" ? "Contacto" : "Contact"}
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
