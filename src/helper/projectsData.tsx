import lakeside from "../assets/portfolio/lakeside.png";
import climo from "../assets/portfolio/climo.png";
import forAllmart from "../assets/portfolio/forAllmart.png";
import criptavisor from "../assets/portfolio/criptavisor.png";
import lacasadelcafe from "../assets/portfolio/lacasadelcafe.png";
import todolist from "../assets/portfolio/todo-list.png";
import sunnyside from "../assets/portfolio/sunnyside-agency.png";
import calculator from "../assets/portfolio/calculator.png";
import hangman from "../assets/portfolio/hangman.png";
import pokeapp from "../assets/portfolio/pokeapp.png";
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

export const projectsEs: IProject[] = [
  {
    id: "1",
    title: "Pokemon App",
    link: "https://pokemon-app-puce-two.vercel.app/",
    shortLink: "pokemon-app-puce-two.vercel.app",
    source: pokeapp,
    desktop: true,
    mobile: true,
    description:
      "Es una aplicación que utiliza la API de PokéAPI para simular una pokedex, con los más de 1000 pokemon existentes, con sus estadísticas, movimientos y evoluciones. También se puede acceder a información sobre los tipos pokemon, sus abilidades y los pokedex regionales",
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
    id: "5",
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
  {
    id: "10",
    title: "Criptavisor",
    link: "https://criptavisor.vercel.app",
    shortLink: "criptavisor.vercel.app",
    source: criptavisor,
    desktop: true,
    mobile: false,
    description:
      "Es una aplicación que permite hacer un seguimiento de las criptomonedas más codiciadas del momento. Con actualizaciones permanentes, rankings y estadísticas podrás comparar y tomar futuras decisiones en el mundo de las criptomonedas. Asímismo, la aplicación ofrece un canal a las últimas noticias sobre el rubro.",
  },
];

export const projectsEn: IProject[] = [
  {
    id: "1",
    title: "Pokemon App",
    link: "https://pokemon-app-puce-two.vercel.app/",
    shortLink: "pokemon-app-puce-two.vercel.app",
    source: pokeapp,
    desktop: true,
    mobile: true,
    description:
      "It is an application that uses the PokéAPI to simulate a Pokédex, featuring over 1000 existing Pokémon with their statistics, moves, and evolutions. It also provides information about Pokémon types, abilities, and regional Pokédexes.",
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
      "This is an e-commerce website created using the EDteam API. It has multiple functionalities such as login, registration, creating, editing, and deleting products, among others. Additionally, it utilizes the PayPal API for processing payments and registering purchases and sales.",
  },
  {
    id: "3",
    title: "Hangman Game",
    link: "https://hangman-three-dusky.vercel.app/",
    shortLink: "hangman-three-dusky.vercel.app",
    source: hangman,
    desktop: true,
    mobile: true,
    description:
      "This is the classic hangman game, featuring over 300 words and comments from our star host, the Grim Reaper, who eagerly awaits your arrival when you're hanged. So please... win, if you can!",
  },
  {
    id: "4",
    title: "Calculator App",
    link: "https://calculator-app-pink-sigma.vercel.app/",
    shortLink: "calculator-app-pink-sigma.vercel.app",
    source: calculator,
    desktop: true,
    mobile: true,
    description:
      "This calculator is part of a Frontend Mentor challenge and allows performing basic operations.",
  },
  {
    id: "5",
    title: "ToDo-List",
    link: "https://todo-list-tan-theta.vercel.app/",
    shortLink: "todo-list-tan-theta.vercel.app",
    source: todolist,
    desktop: true,
    mobile: true,
    description:
      "This is a task list where you can organize your day, month, or year as you wish, creating and updating your tasks.",
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
      "This is an application that allows checking the weather in the city of Rosario, Argentina. Climo displays the conditions from today to the next 5 days. It relies on the AccuWeather API.",
  },
  {
    id: "7",
    title: "Cafeteria Menu",
    link: "https://menu-cafeteria.vercel.app/",
    shortLink: "menu-cafeteria.vercel.app",
    source: lacasadelcafe,
    desktop: true,
    mobile: true,
    description:
      "This is a website that displays the menu of a café, where you can enjoy a delicious specialty coffee or indulge in some tasty ham and cheese croissants or any other fillings you prefer. The menu is fully customizable and accessible via a QR code.",
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
      "This responsive landing page is the solution to one of the frontend mentor challenges.",
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
      "This is a fictional website that provides lodging services. Lakeside offers a vacation experience surrounded by nature. The website features several sections and a contact form for reservations or inquiries.",
  },
  {
    id: "10",
    title: "Criptavisor",
    link: "https://criptavisor.vercel.app",
    shortLink: "criptavisor.vercel.app",
    source: criptavisor,
    desktop: true,
    mobile: false,
    description:
      "This is an application that allows you to track the most coveted cryptocurrencies of the moment. With real-time updates, rankings, and statistics, you can compare and make future decisions in the world of cryptocurrencies. Additionally, the application provides a channel to the latest news in the field.",
  },
];
