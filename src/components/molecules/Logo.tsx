interface Props {
  theme: string;
}
const Logo: React.FC<Props> = ({ theme }) => {
  return (
    <div className="logo flex items-center gap-x-4">
      <div className="h-4 w-4 bg-primary-light-500 rounded-full"></div>
      <p className={`hidden md:inline font-medium  text-sm mail-${theme}`}>
        maxoleo.dev@gmail.com
      </p>
    </div>
  );
};

export default Logo;
