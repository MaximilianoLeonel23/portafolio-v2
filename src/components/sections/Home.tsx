import githubLight from "../../assets/icons/github-light.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import githubDark from "../../assets/icons/github-dark.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";
import cv from "../../assets/pdf/maximilianoperez_cv.pdf";
import { useLanguage } from "../../context/language.context";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import { useEffect } from "react";
interface Props {
  theme: string;
}
const Home: React.FC<Props> = ({ theme }) => {
  const { language, switchLanguage } = useLanguage();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "li",
        { opacity: 1, y: 0 },
        { delay: stagger(0.25), duration: 1 }
      );
    }
  }, [isInView]);

  return (
    <section id="home" className="h-screen w-full">
      <div className="container flex mx-auto gap-8">
        <div>
          <div className="flex flex-col pt-32 lg:pt-40">
            <div>
              <motion.h1
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -20, opacity: 0 }}
                transition={{ duration: 1 }}
                className={`home-title-${theme} font-extrabold text-6xl sm:text-8xl py-4`}
              >
                Fullstack Developer
              </motion.h1>
              <motion.div
                animate={{ width: "100%" }}
                initial={{ width: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                className={`${
                  theme === "light"
                    ? "bg-primary-light-500"
                    : "bg-primary-dark-500"
                } h-0.5 rounded`}
              ></motion.div>
            </div>
            <ul className="flex items-start gap-x-4 pt-4" ref={scope}>
              <motion.li initial={{ opacity: 0, y: 50 }}>
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
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }}>
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
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }}>
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
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 50 }}>
                <a
                  className={`cv-btn cv-btn-${theme}`}
                  onClick={switchLanguage}
                >
                  <span>{language.toUpperCase()}</span>
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
