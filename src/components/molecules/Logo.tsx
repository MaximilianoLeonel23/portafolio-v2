interface Props {
  theme: string;
}
const Logo: React.FC<Props> = ({ theme }) => {
  return (
    <div className="flex items-center gap-x-4">
      <p
        className={`hidden md:inline font-medium  text-sm mail-${theme} navbar-item`}
      >
        <span className="main-text">maxoleo.dev@gmail.com</span>
        <span className="hover-text">maxoleo.dev@gmail.com</span>
      </p>
    </div>
  );
};

export default Logo;
