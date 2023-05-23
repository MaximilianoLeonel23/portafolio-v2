import Logo from "../molecules/Logo";
import Navbar from "../molecules/Navbar";

interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}
const Header: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <header className="fixed left-0 right-0 py-4 z-30 blur-background border-b border-gray-500">
      <div className="container flex justify-between items-center">
        <Logo />
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Header;
