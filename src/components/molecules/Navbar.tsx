import { useLanguage } from "../../context/language.context";
import ModeBtn from "./../atoms/ModeBtn";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
  handleShowMenu: () => void;
  changeBtn: () => void;
}
const Navbar: React.FC<Props> = ({
  theme,
  setTheme,
  handleShowMenu,
  changeBtn,
}) => {
  const { language } = useLanguage();
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-6">
        <li className={`navbar-item navbar-item-${theme}`}>
          <a href="#home">
            {" "}
            {language === "es" ? (
              <>
                <span className="main-text">Inicio</span>
                <span className="hover-text">Inicio</span>
              </>
            ) : (
              <>
                <span className="main-text">Home</span>
                <span className="hover-text">Home</span>
              </>
            )}
          </a>
        </li>
        <li className={`navbar-item navbar-item-${theme}`}>
          <a href="#projects">
            {language === "es" ? (
              <>
                <span className="main-text">Proyectos</span>
                <span className="hover-text">Proyectos</span>
              </>
            ) : (
              <>
                <span className="main-text">Projects</span>
                <span className="hover-text">Projects</span>
              </>
            )}
          </a>
        </li>
        <li className={`navbar-item navbar-item-${theme}`}>
          <a href="#about">
            {language === "es" ? (
              <>
                <span className="main-text">Sobre mi</span>
                <span className="hover-text">Sobre mi</span>
              </>
            ) : (
              <>
                <span className="main-text">About me</span>
                <span className="hover-text">About me</span>
              </>
            )}
          </a>
        </li>
        <ModeBtn theme={theme} setTheme={setTheme} />
      </ul>
      <ul className="flex md:hidden items-center gap-6">
        <ModeBtn theme={theme} setTheme={setTheme} />
        <li>
          <div
            className="flex flex-col gap-y-2 z-10"
            onClick={() => {
              changeBtn();
              handleShowMenu();
            }}
          >
            <span
              id="line1"
              className={`w-6 h-0.5 rounded-lg navbar-menu-${theme} transition`}
            ></span>
            <span
              id="line2"
              className={`w-6 h-0.5 -translate-x-1 rounded-lg navbar-menu-${theme} transition`}
            ></span>
            <span
              id="line3"
              className={`w-6 h-0.5 rounded-lg navbar-menu-${theme} transition`}
            ></span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
