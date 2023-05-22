import ilustration from "../../assets/portfolio/light-ilustration.svg";

const Home = () => {
  return (
    <section id="home" className="h-screen container">
      <div className="relative h-full">
        <div className="flex flex-col gap-y-2 pt-48">
          <p className="font-light text-gray-900">Maximiliano Leonel Pérez</p>
          <h1 className="font-bold text-7xl text-gray-900">
            Frontend Developer
          </h1>
          <ul className="flex gap-x-4">
            <li>
              <a>
                <div className="h-4 w-4 bg-primary-light-500 rounded-full"></div>
              </a>
            </li>
            <li>
              <a>
                <div className="h-4 w-4 bg-primary-light-500 rounded-full"></div>
              </a>
            </li>
            <li>
              <a>
                <div className="h-4 w-4 bg-primary-light-500 rounded-full"></div>
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute -right-1/3 top-0 -z-10 opacity-70">
          <img
            src={ilustration}
            alt="ilustracion"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
