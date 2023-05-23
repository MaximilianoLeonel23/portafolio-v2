// import ilustration from "../../assets/portfolio/light-ilustration.svg";
import githubLight from "../../assets/icons/github-light.svg";
import linkedinLight from "../../assets/icons/linkedin-light.svg";
import githubDark from "../../assets/icons/github-dark.svg";
import linkedinDark from "../../assets/icons/linkedin-dark.svg";

interface Props {
  theme: string;
}
const Home: React.FC<Props> = ({ theme }) => {
  return (
    <section id="home" className="h-screen container">
      <div className="relative h-full">
        <div className="flex flex-col gap-y-4 pt-32 lg:pt-40">
          <p className="text-gray-800 text-sm lg:text-base">
            Maximiliano Leonel Pérez
          </p>
          <h1 className="font-bold text-6xl lg:text-7xl text-gray-900">
            Frontend Developer
          </h1>
          <ul className="flex gap-x-4">
            <li>
              <a href="https://github.com/MaximilianoLeonel23" target="_blank">
                <div className="h-8 w-8">
                  <img src={theme === "light" ? githubLight : githubDark} />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maximiliano-leonel-p%C3%A9rez-8846b826a/"
                target="_blank"
              >
                <div className="h-8 w-8 ">
                  <img src={theme === "light" ? linkedinLight : linkedinDark} />
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="absolute -right-1/3 top-64 lg:top-0 opacity-70 overflow-hidden">
          <img
            src={ilustration}
            alt="ilustracion"
            className="h-full w-full object-cover"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Home;
