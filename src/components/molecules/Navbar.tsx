import lightMode from "../../assets/icons/light-mode.svg";
import darkMode from "../../assets/icons/dark-mode.svg";
interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}
const Navbar: React.FC<Props> = ({ theme, setTheme }) => {
  const handleThemeMode = (): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const changeBtn = () => {
    const line1: HTMLElement | null = document.getElementById("line1");
    const line2: HTMLElement | null = document.getElementById("line2");
    const line3: HTMLElement | null = document.getElementById("line3");
    const menu: HTMLElement | null = document.getElementById("menu");

    menu?.classList.toggle("-translate-x-full");
    line1?.classList.toggle("translate-y-2.5");
    line1?.classList.toggle("rotate-45");
    line2?.classList.toggle("opacity-0");
    line3?.classList.toggle("-translate-y-2.5");
    line3?.classList.toggle("-rotate-45");
  };

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-6 font-medium">
        <li className={`navbar-item navbar-item-${theme}`}>
          <a href="#home">
            {" "}
            <span className="main-text">Inicio</span>
            <span className="hover-text">Inicio</span>
          </a>
        </li>
        <li className={`navbar-item navbar-item-${theme}`}>
          <a href="#projects">
            {" "}
            <span className="main-text">Proyectos</span>
            <span className="hover-text">Proyectos</span>
          </a>
        </li>
        <li className={`navbar-item navbar-item-${theme}`}>
          <a href="#about">
            <span className="main-text">Sobre mi</span>
            <span className="hover-text">Sobre mi</span>
          </a>
        </li>
        <li className="flex items-center justify-center h-6 w-6">
          <a onClick={handleThemeMode} className="cursor-pointer">
            {theme === "light" && (
              <img src={lightMode} className="w-full h-full" />
            )}
            {theme === "dark" && <img src={darkMode} />}
          </a>
        </li>
      </ul>
      <ul className="flex md:hidden items-center gap-6">
        <li className="flex items-center justify-center h-8 w-8">
          <a onClick={handleThemeMode} className="cursor-pointer">
            {theme === "light" && (
              <img src={lightMode} className="w-full h-full" />
            )}
            {theme === "dark" && (
              <img src={darkMode} className="w-full h-full" />
            )}
          </a>
        </li>
        <li>
          <div className="flex flex-col gap-y-2 z-10" onClick={changeBtn}>
            <span
              id="line1"
              className={`w-8 h-0.5 rounded-lg navbar-menu-${theme} bg-gray-800 transition`}
            ></span>
            <span
              id="line2"
              className={`w-8 h-0.5 -translate-x-1 rounded-lg navbar-menu-${theme} transition`}
            ></span>
            <span
              id="line3"
              className={`w-8 h-0.5 rounded-lg navbar-menu-${theme} transition`}
            ></span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
