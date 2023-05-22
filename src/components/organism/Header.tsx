import Logo from "../molecules/Logo";
import Navbar from "../molecules/Navbar";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 container">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
