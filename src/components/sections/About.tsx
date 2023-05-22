import photo from "../../assets/about/photo.jpg";

const About = () => {
  return (
    <section id="about" className="container py-16">
      <div className="flex gap-x-16">
        <div className="flex items-end justify-center">
          <img src={photo} className="w-2/5 pb-8" />
        </div>
        <div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h4 className="font-semibold text-xl text-gray-600">Sobre mi</h4>
              <p className="text-gray-500">
                Soy una persona disciplinada, organizada y eficiente en mi
                trabajo. Tengo paciencia y buena predisposición para aprender y
                busco constantemente desafiar mis habilidades. Me considero
                sobre todo un estudiante autodidacta.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4 className="font-semibold text-xl text-gray-600">
                Formación y cursos
              </h4>
              <ul className="text-gray-500">
                <li>Programación desde cero - Egg Educación</li>
                <li>Front End - EDteam</li>
                <li>Javascript Front End - Argentina Programa 4.0</li>
                <li>Full Stack Python - Codo a Codo</li>
                <li>FullstackOpen</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-4">
              <h4 className="font-semibold text-xl text-gray-600">
                Tecnologías
              </h4>
              <div className="columns-2 gap-x-8">
                <ul className="text-gray-500">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>Typescript</li>
                  <li>Git</li>
                  <li>Sass</li>
                </ul>
                <ul className="text-gray-500">
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Jest</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <h4 className="font-semibold text-xl text-gray-600">Contacto</h4>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
