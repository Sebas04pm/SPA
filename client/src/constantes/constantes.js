// Rutas
const rutas = [
	{ name: "Inicio", href: "Inicio", current: true },
	{ name: "¿Por qué Nosotros?", href: "Nosotros", current: false },
	{ name: "Experiencias", href: "Experiencias", current: false },
	{ name: "Planes", href: "/Planes", current: false },
];
// Planes
const planes = [
	{
		id: "1",
		titulo: "Viaje a la Luna",
		descripcion:
			"Viaja con tu familia a la luna, una oportunidad unica con grandes vistas.",
		precio: "$699k",
		caracteristicas: [
			"Cabinas privadas para el viaje",
			"Habitaciones con buena vista en las mejores estaciones espaciales",
			"Comida de calidad",
			"Camisas exclusivas del viaje a la Luna",
		],
	},
	{
		id: "2",
		titulo: "Viaje a Marte",
		descripcion: "¿Te gusta el rojo? ¡animate a visitar al planeta más rojo!",
		precio: "$1.299k",
		unidad: "USD",
		caracteristicas: [
			"Cabinas privadas para el viaje",
			"Habitaciones con funcionalidad gravedad 0",
			"Comidas de gourmet",
			"Camisas exclusivas del viaje a Marte",
		],
	},
	{
		id: "3",
		titulo: "Viaje a Venus",
		descripcion: "Es el planeta más cálido del sistema solar ¡animate a conocerlo!",
		precio: "$3.299k",
		unidad: "USD",
		caracteristicas: [
			"Cabinas privadas para el viaje",
			"Habitaciones con funcionalidad gravedad 0 y paredes holográficas.",
			"Comida de calidad",
			"Camisas exclusivas del viaje a Venus",
		],
	},
];
// Nosotros
const nosotros = [
	{
		id: "1",
		description: "Asistencia personalizada en cualquiera de tus destinos favoritos.",
		src: "/src/images/cuarto.png",
	},
	{
		id: "2",
		description: "Protección a mascotas.",
		src: "/src/images/gato-espacial.png",
	},
	{
		id: "3",
		description: "Cobertura COVID-19.",
		src: "/src/images/casillero.png",
	},
];
// Experiencias
const experiencias = [
	{
		id: "1",
		description:
			"Muy agradecido con esta agencia, es la segunda vez que compro un boleto y me han tratado súper bien, han sido súper atentos y pacientes, muy buena atención por parte de la asesora Jessica velazques, que con su profesionalismo y buena personalidad me ayudo con todo el proceso, tanto el año pasado como este presente año. Muchas gracias",
		autor: "Jovani Vasque",
	},
	{
		id: "2",
		description:
			"Excelente atención y orientación. Es mi segunda experiencia con ustedes y estoy muy satisfecho. Muchas gracias!!!",
		autor: "Elon Musk",
	},
	{
		id: "3",
		description:
			"Nuestra experiencia fue altamente satisfactoria pues de forma muy eficiente se hizo consulta vídeo conferencia para asistir al asegurado y las indicaciones correspondientes llegaron inmediatamente.",
		autor: "Camila Colmenares",
	},
	{
		id: "4",
		description:
			"Excelente servicio, cumplió con mis requerimientos al 100% destacando la disposición a entregar una buena experiencia al cliente, mis felicitaciones a la empresa y al ejecutivo por su atención.",
		autor: "Davefer Paez",
	},
];
// Footer links
const footerLinks = [
	{ name: "Sobre nosotros", value: "12" },
	{ name: "Nuestros Servicios", value: "300+" },
	{ name: "Nuestros seguros", value: "40" },
];

export { planes, nosotros, rutas, footerLinks, experiencias };
