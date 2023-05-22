const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4 font-medium">
        <li className="font-medium text-gray-800">
          <a href="#home">Inicio</a>
        </li>
        <li className="font-medium text-gray-800">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="font-medium text-gray-800">
          <a href="#about">Sobre mi</a>
        </li>
        <li className="h-4 w-4 bg-primary-light-500 rounded-full"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
