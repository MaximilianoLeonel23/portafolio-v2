import climo from '../assets/portfolio/climo.png';
import forAllmart from '../assets/portfolio/forAllmart.png';
import criptavisor from '../assets/portfolio/criptavisor.png';
import lacasadelcafe from '../assets/portfolio/lacasadelcafe.png';
import todolist from '../assets/portfolio/todo-list.png';
import sunnyside from '../assets/portfolio/sunnyside-agency.png';
import calculator from '../assets/portfolio/calculator.png';
import hangman from '../assets/portfolio/hangman.png';
import pokeapp from '../assets/portfolio/pokeapp.png';
import readinglist from '../assets/portfolio/reading-list.png';
import unsplash from '../assets/portfolio/unsplash.png';
import imageuploader from '../assets/portfolio/image-uploader.png';
import catwiki from '../assets/portfolio/catwiki.png';
import klinika from '../assets/portfolio/klinika.png';

export interface IProject {
	id: string;
	title: string;
	link: string;
	shortLink: string;
	source: string;
	desktop: boolean;
	mobile: boolean;
	description: string;
	skills: string[];
}

export const projectsEs: IProject[] = [
	{
		id: '1',
		title: 'Pokemon App',
		link: 'https://pokemon-app-puce-two.vercel.app/',
		shortLink: 'pokemon-app-puce-two.vercel.app',
		source: pokeapp,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
		description:
			'Es una aplicación que utiliza la API de PokéAPI para simular una pokedex, con los más de 1000 pokemon existentes, con sus estadísticas, movimientos y evoluciones. También se puede acceder a información sobre los tipos pokemon, sus abilidades y los pokedex regionales',
	},
	{
		id: '2',
		title: 'forAllmart',
		link: 'https://forallmart.vercel.app/',
		shortLink: 'forallmart.vercel.app/',
		source: forAllmart,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS'],
		description:
			'Es un ecommerce creado con la API de EDteam. Tiene múltiples funcionalidades como login, registrarse, crear, editar y eliminar productos, entre otras. Además utiliza la API de PayPal para realizar pagos y registrar compras y ventas.',
	},
	{
		id: '3',
		title: 'Juego del Ahorcado',
		link: 'https://hangman-three-dusky.vercel.app/',
		shortLink: 'hangman-three-dusky.vercel.app',
		source: hangman,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],

		description:
			'Es el clásico juego del ahorcado, con más de 300 palabras y comentarios de nuestra anfitriona estrella, la muerte, que espera recibirte cuando te bajen de la soga. Asi que...¡Por favor, gana!',
	},
	{
		id: '4',
		title: 'Calculator App',
		link: 'https://calculator-app-pink-sigma.vercel.app/',
		shortLink: 'calculator-app-pink-sigma.vercel.app',
		source: calculator,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'Typescript', 'React', 'Tailwind CSS'],

		description:
			'Esta calculadora forma parte de un desafío de frontend mentor y permite realizar las operaciones básicas.',
	},
	{
		id: '5',
		title: 'ToDo-List',
		link: 'https://todo-list-tan-theta.vercel.app/',
		shortLink: 'todo-list-tan-theta.vercel.app',
		source: todolist,
		desktop: true,
		mobile: true,
		skills: ['CSS', 'JavaScript', 'Typescript', 'React', 'Bootstrap'],

		description:
			'Es una lista de tareas donde puedes organizar tu día, mes o año como quieras, creando y actualizando tus deberes.',
	},
	{
		id: '6',
		title: 'Climo',
		link: 'https://climo-weather-app.vercel.app/',
		shortLink: 'climo-weather-app.vercel.app',
		source: climo,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS'],

		description:
			'Es una aplicación que permite chequear el clima en la ciudad de Rosario, Argentina. Climo muestra desde las condiciones actuales hasta los siguientes 5 días. Se sirve de la API de AccuWeather.',
	},

	{
		id: '7',
		title: 'Menú cafetería',
		link: 'https://menu-cafeteria.vercel.app/',
		shortLink: 'menu-cafeteria.vercel.app',
		source: lacasadelcafe,
		desktop: true,
		mobile: true,
		skills: ['HTML', 'CSS', 'JavaScript', 'Sass', 'Bootstrap'],

		description:
			'Es una página que muestra el menú o carta de una cafetería, dónde puedes tomarte un delicioso café de especialidad o merendar unas ricas medialunas con jamón, queso o lo que que más te guste. Es completamente personalizable y accesible mediante un código QR.',
	},

	{
		id: '8',
		title: 'Sunnyside Agency',
		link: 'https://sunnyside-ten-chi.vercel.app/',
		shortLink: 'sunnyside-ten-chi.vercel.app',
		source: sunnyside,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS'],

		description:
			'Esta landing page responsive es la resolución de uno de challenges de frontend mentor.',
	},
	{
		id: '9',
		title: 'Reading List',
		link: 'https://pruebas-tecnicas-reading-list.vercel.app/',
		shortLink: 'pruebas-tecnicas-reading-list.app',
		source: readinglist,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Cypress'],
		description:
			'Esta reading list es la resolución de una prueba técnica. Consiste en una lista de lectura, que permite visualizar libros, agregarlos o desagregarlos del cátalogo hacia la lista de lectura, filtrado por páginas, género, título o autor.',
	},
	{
		id: '10',
		title: 'Criptavisor',
		link: 'https://criptavisor.vercel.app',
		shortLink: 'criptavisor.vercel.app',
		source: criptavisor,
		desktop: true,
		mobile: false,
		skills: ['JavaScript', 'React', 'Sass'],

		description:
			'Es una aplicación que permite hacer un seguimiento de las criptomonedas más codiciadas del momento. Con actualizaciones permanentes, rankings y estadísticas podrás comparar y tomar futuras decisiones en el mundo de las criptomonedas. Asímismo, la aplicación ofrece un canal a las últimas noticias sobre el rubro.',
	},
	{
		id: '11',
		title: 'My Unsplash App',
		link: 'https://my-unsplash-app-three.vercel.app/',
		shortLink: 'my-unsplash-app-three.vercel.app',
		source: unsplash,
		desktop: true,
		mobile: false,
		skills: ['Typescript', 'React', 'Next.js', 'Tailwind CSS', 'Firebase'],

		description:
			'Esta es una aplicación similar a Unsplash, donde podes subir tus fotos y compartirlas en un muro público con estilos tipo masonry.',
	},
	{
		id: '12',
		title: 'Image Uploader',
		link: 'https://image-uploader-tau-ten.vercel.app/',
		shortLink: 'image-uploader-tau-ten.vercel.app',
		source: imageuploader,
		desktop: true,
		mobile: false,
		skills: ['Typescript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js'],

		description:
			'¡En esta app podés subir tus imagenes en formato PNG o JPG a una URL pública y utilizarla luego como más quieras!',
	},
	{
		id: '13',
		title: 'Cat Wiki',
		link: 'https://catwiki-eta.vercel.app/',
		shortLink: 'catwiki-eta.vercel.app',
		source: catwiki,
		desktop: true,
		mobile: true,
		skills: ['Typescript', 'Next.js', 'Tailwind CSS'],
		description:
			'Esta es una aplicación que te permite conocer más sobre los gatos: sus características, comportamientos, habitos, etc.',
	},
	{
		id: '14',
		title: 'Klinika',
		link: 'https://mecharcovz-fe.vercel.app/',
		shortLink: 'mecharcovz-fe.vercel.app',
		source: klinika,
		desktop: true,
		mobile: true,
		skills: [
			'React',
			'Next.js',
			'Material-UI',
			'Yup',
			'Formik',
			'Node.js',
			'Express.js',
			'PostgreSQL',
			'Sequelize',
			'Stripe',
		],
		description:
			'Somos un gestor de telemedicina. Nuestra misión es conectar profesionales de la salud con pacientes que requieran de sus servicios de una manera amigable, comoda y accesible.',
	},
];

export const projectsEn: IProject[] = [
	{
		id: '1',
		title: 'Pokemon App',
		link: 'https://pokemon-app-puce-two.vercel.app/',
		shortLink: 'pokemon-app-puce-two.vercel.app',
		source: pokeapp,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
		description:
			'It is an application that uses the PokéAPI to simulate a Pokédex, featuring over 1000 existing Pokémon with their statistics, moves, and evolutions. It also provides information about Pokémon types, abilities, and regional Pokédexes.',
	},
	{
		id: '2',
		title: 'forAllmart',
		link: 'https://forallmart.vercel.app/',
		shortLink: 'forallmart.vercel.app/',
		source: forAllmart,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS'],
		description:
			'This is an e-commerce website created using the EDteam API. It has multiple functionalities such as login, registration, creating, editing, and deleting products, among others. Additionally, it utilizes the PayPal API for processing payments and registering purchases and sales.',
	},
	{
		id: '3',
		title: 'Hangman Game',
		link: 'https://hangman-three-dusky.vercel.app/',
		shortLink: 'hangman-three-dusky.vercel.app',
		source: hangman,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
		description:
			"This is the classic hangman game, featuring over 300 words and comments from our star host, the Grim Reaper, who eagerly awaits your arrival when you're hanged. So please... win, if you can!",
	},

	{
		id: '4',
		title: 'Calculator App',
		link: 'https://calculator-app-pink-sigma.vercel.app/',
		shortLink: 'calculator-app-pink-sigma.vercel.app',
		source: calculator,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
		description:
			'This calculator is part of a Frontend Mentor challenge and allows performing basic operations.',
	},

	{
		id: '5',
		title: 'ToDo-List',
		link: 'https://todo-list-tan-theta.vercel.app/',
		shortLink: 'todo-list-tan-theta.vercel.app',
		source: todolist,
		desktop: true,
		mobile: true,
		skills: ['CSS', 'JavaScript', 'TypeScript', 'React', 'Bootstrap'],
		description:
			'This is a task list where you can organize your day, month, or year as you wish, creating and updating your tasks.',
	},

	{
		id: '6',
		title: 'Climo',
		link: 'https://climo-weather-app.vercel.app/',
		shortLink: 'climo-weather-app.vercel.app',
		source: climo,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS'],
		description:
			'This is an application that allows checking the weather in the city of Rosario, Argentina. Climo displays the conditions from today to the next 5 days. It relies on the AccuWeather API.',
	},

	{
		id: '7',
		title: 'Cafeteria Menu',
		link: 'https://menu-cafeteria.vercel.app/',
		shortLink: 'menu-cafeteria.vercel.app',
		source: lacasadelcafe,
		desktop: true,
		mobile: true,
		skills: ['HTML', 'CSS', 'JavaScript', 'Sass', 'Bootstrap'],
		description:
			'This is a website that displays the menu of a café, where you can enjoy a delicious specialty coffee or indulge in some tasty ham and cheese croissants or any other fillings you prefer. The menu is fully customizable and accessible via a QR code.',
	},

	{
		id: '8',
		title: 'Sunnyside Agency',
		link: 'https://sunnyside-ten-chi.vercel.app/',
		shortLink: 'sunnyside-ten-chi.vercel.app',
		source: sunnyside,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'React', 'Tailwind CSS'],
		description:
			'This responsive landing page is the solution to one of the frontend mentor challenges.',
	},

	{
		id: '9',
		title: 'Reading List',
		link: 'https://pruebas-tecnicas-reading-list.vercel.app/',
		shortLink: 'pruebas-tecnicas-reading-list.app',
		source: readinglist,
		desktop: true,
		mobile: true,
		skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Cypress'],
		description:
			'This reading list is the resolution of a technical test. It consists of a reading list, which allows visualizing books, adding or removing them from the catalog to the reading list, filtering by pages, genre, and title.',
	},

	{
		id: '10',
		title: 'Criptavisor',
		link: 'https://criptavisor.vercel.app',
		shortLink: 'criptavisor.vercel.app',
		source: criptavisor,
		desktop: true,
		mobile: false,
		skills: ['JavaScript', 'React', 'Sass'],
		description:
			'This is an application that allows you to track the most coveted cryptocurrencies of the moment. With real-time updates, rankings, and statistics, you can compare and make future decisions in the world of cryptocurrencies. Additionally, the application provides a channel to the latest news in the field.',
	},
	{
		id: '11',
		title: 'My Unsplash App',
		link: 'https://my-unsplash-app-three.vercel.app/',
		shortLink: 'my-unsplash-app-three.vercel.app',
		source: unsplash,
		desktop: true,
		mobile: false,
		skills: ['Typescript', 'React', 'Next.js', 'Tailwind CSS', 'Firebase'],
		description:
			'This is an application similar to Unsplash, where you can upload your photos and share them on a public wall with masonry-style layouts.',
	},
	{
		id: '12',
		title: 'Image Uploader',
		link: 'https://image-uploader-tau-ten.vercel.app/',
		shortLink: 'image-uploader-tau-ten.vercel.app',
		source: imageuploader,
		desktop: true,
		mobile: false,
		skills: ['Typescript', 'React', 'Tailwind CSS', 'Node.js', 'Express.js'],
		description:
			'In this app, you can upload your images in PNG or JPG format to a public URL and then use them however you like!',
	},
	{
		id: '13',
		title: 'Cat Wiki',
		link: 'https://catwiki-eta.vercel.app/',
		shortLink: 'catwiki-eta.vercel.app',
		source: catwiki,
		desktop: true,
		mobile: true,
		skills: ['Typescript', 'Next.js', 'Tailwind CSS'],
		description:
			'This is an application that allows you to learn more about cats: their characteristics, behaviors, habits, and more.',
	},
	{
		id: '14',
		title: 'Klinika',
		link: 'https://mecharcovz-fe.vercel.app/',
		shortLink: 'mecharcovz-fe.vercel.app',
		source: klinika,
		desktop: true,
		mobile: true,
		skills: [
			'React',
			'Next.js',
			'Material-UI',
			'Yup',
			'Formik',
			'Node.js',
			'Express.js',
			'PostgreSQL',
			'Sequelize',
			'Stripe',
		],
		description:
			'We are a medical clinic. Our mission is to connect healthcare professionals with patients who need their services in a friendly, convenient, and accessible way.',
	},
];
