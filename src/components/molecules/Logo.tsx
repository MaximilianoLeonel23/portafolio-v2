import logo from "../../assets/icons/favicon.svg";

interface Props {
  theme: string;
}
const Logo: React.FC<Props> = ({ theme }) => {
  return (
    <div className="flex items-center gap-x-4">
      <img src={logo} alt="logo" className="h-6 w-6" />
      <div className="hidden sm:inline">
        <p className={`font-medium text-sm mail-${theme} navbar-item`}>
          <span className="main-text">Maximiliano Leonel Pérez</span>
          <span className="hover-text">Maximiliano Leonel Pérez</span>
        </p>
      </div>
    </div>
  );
};

export default Logo;
