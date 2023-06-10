interface Props {
  theme: string;
  setTheme: (theme: string) => void;
}

const ModeBtn: React.FC<Props> = ({ theme, setTheme }) => {
  const handleThemeMode = (): void => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className={`relative h-6 w-12 ${
        theme === "light"
          ? "bg-gray-200 hover:bg-primary-light-500"
          : "bg-gray-900 hover:bg-primary-dark-500"
      } rounded-full cursor-pointer mode-btn--shadow transition-colors duration-300`}
      onClick={handleThemeMode}
    >
      <div
        className={`h-6 w-6 rounded-full ${
          theme === "light"
            ? "bg-primary-white translate-x-full"
            : "bg-gray-800 translate-x-0 "
        } scale-[0.7] ease-in-out transition-transform duration-300`}
      ></div>
    </button>
  );
};

export default ModeBtn;
