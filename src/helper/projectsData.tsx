import lakeside from "../assets/portfolio/lakeside.png";
import climo from "../assets/portfolio/climo.png";
import forAllmart from "../assets/portfolio/forAllmart.png";
import criptavisor from "../assets/portfolio/criptavisor.png";
import lacasadelcafe from "../assets/portfolio/lacasadelcafe.png";
import todolist from "../assets/portfolio/todo-list.png";
import sunnyside from "../assets/portfolio/sunnyside-agency.png";
import calculator from "../assets/portfolio/calculator.png";
import hangman from "../assets/portfolio/hangman.png";

export interface IProject {
  id: string;
  title: string;
  link: string;
  shortLink: string;
  source: string;
  desktop: boolean;
  mobile: boolean;
  description: string;
}
const projectsData: IProject[] = [
  {
    id: "1",
    title: "Calculator App",
    link: "https://calculator-app-pink-sigma.vercel.app/",
    shortLink: "calculator-app-pink-sigma.vercel.app",
    source: calculator,
    desktop: true,
    mobile: true,
    description:
      "Esta calculadora forma parte de un desafío de frontend mentor y permite realizar las operaciones básicas.",
  },
  {
    id: "2",
    title: "forAllmart",
    link: "https://forallmart.vercel.app/",
    shortLink: "forallmart.vercel.app/",
    source: forAllmart,
    desktop: true,
    mobile: true,
    description:
      "Es un ecommerce creado con la API de EDteam. Tiene múltiples funcionalidades como login, registrarse, crear, editar y eliminar productos, entre otras. Además utiliza la API de PayPal para realizar pagos y registrar compras y ventas.",
  },
  {
    id: "3",
    title: "Juego del Ahorcado",
    link: "https://hangman-three-dusky.vercel.app/",
    shortLink: "hangman-three-dusky.vercel.app",
    source: hangman,
    desktop: true,
    mobile: true,
    description:
      "Es el clásico juego del ahorcado, con más de 300 palabras y comentarios de nuestra anfitriona estrella, la muerte, que espera recibirte cuando te bajen de la soga. Asi que...¡Por favor, gana!",
  },
  {
    id: "4",
    title: "ToDo-List",
    link: "https://todo-list-tan-theta.vercel.app/",
    shortLink: "todo-list-tan-theta.vercel.app",
    source: todolist,
    desktop: true,
    mobile: true,
    description:
      "Es una lista de tareas donde puedes organizar tu día, mes o año como quieras, creando y actualizando tus deberes.",
  },
  {
    id: "5",
    title: "Criptavisor",
    link: "https://criptavisor.vercel.app",
    shortLink: "criptavisor.vercel.app",
    source: criptavisor,
    desktop: true,
    mobile: false,
    description:
      "Es una aplicación que permite hacer un seguimiento de las criptomonedas más codiciadas del momento. Con actualizaciones permanentes, rankings y estadísticas podrás comparar y tomar futuras decisiones en el mundo de las criptomonedas. Asímismo, la aplicación ofrece un canal a las últimas noticias sobre el rubro.",
  },
  {
    id: "6",
    title: "Climo",
    link: "https://climo-weather-app.vercel.app/",
    shortLink: "climo-weather-app.vercel.app",
    source: climo,
    desktop: true,
    mobile: true,
    description:
      "Es una aplicación que permite chequear el clima en la ciudad de Rosario, Argentina. Climo muestra desde las condiciones actuales hasta los siguientes 5 días. Se sirve de la API de AccuWeather.",
  },

  {
    id: "7",
    title: "Menú cafetería",
    link: "https://menu-cafeteria.vercel.app/",
    shortLink: "menu-cafeteria.vercel.app",
    source: lacasadelcafe,
    desktop: true,
    mobile: true,
    description:
      "Es una página que muestra el menú o carta de una cafetería, dónde puedes tomarte un delicioso café de especialidad o merendar unas ricas medialunas con jamón, queso o lo que que más te guste. Es completamente personalizable y accesible mediante un código QR.",
  },

  {
    id: "8",
    title: "Sunnyside Agency",
    link: "https://sunnyside-ten-chi.vercel.app/",
    shortLink: "sunnyside-ten-chi.vercel.app",
    source: sunnyside,
    desktop: true,
    mobile: true,
    description:
      "Esta landing page responsive es la resolución de uno de challenges de frontend mentor.",
  },
  {
    id: "9",
    title: "Lakeside",
    link: "https://lakeside-jade.vercel.app",
    shortLink: "lakeside-jade.vercel.app",
    source: lakeside,
    desktop: true,
    mobile: true,
    description:
      "Es una página web ficticia que brinda servicio de hospedaje. Lakeside transmite una experiencia de vacaciones rodeado de naturaleza. La página cuenta con varias secciones y un formulario de contacto para reservas o consultas.",
  },
];

export default projectsData;
