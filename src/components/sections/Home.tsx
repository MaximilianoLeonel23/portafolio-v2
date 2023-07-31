import githubLight from "../../assets/icons/github-light.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import githubDark from "../../assets/icons/github-dark.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";
import cv from "../../assets/pdf/maximilianoperez_cv.pdf";
import { useLanguage } from "../../context/language.context";
import { motion } from "framer-motion";

interface Props {
  theme: string;
}
const Home: React.FC<Props> = ({ theme }) => {
  const { language, switchLanguage } = useLanguage();

  return (
    <section id="home" className="h-screen w-full">
      <div className="container flex mx-auto gap-8">
        <div>
          <div className="flex flex-col pt-32 lg:pt-40">
            <motion.h1
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -20, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`home-title-${theme} font-extrabold text-7xl`}
            >
              Fullstack Developer
            </motion.h1>
            <ul className="flex items-center gap-x-4 pt-4">
              <li>
                <a
                  href="https://github.com/MaximilianoLeonel23"
                  target="_blank"
                >
                  <div className="h-8 w-8">
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
              <li>
                <a
                  href={cv}
                  download="maximiliano_perez_cv"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`cv-btn cv-btn-${theme}`}
                >
                  <span>
                    {language === "es" ? "Descargar CV" : "Download CV"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  className={`cv-btn cv-btn-${theme}`}
                  onClick={switchLanguage}
                >
                  <span>{language.toUpperCase()}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
