import { createContext, useRef, useState } from "react";
const generalContext = createContext();

function GeneralContext({ children }) {
	const [activeMenu, setActiveMenu] = useState(false);
	let parrafo1 = "Lo intenta...";

	let parrafo2 =
		"Me ha interesado el mundo de la tecnología desde pequeño, pero fue en este año que decidí meterme de lleno en el mundo de la programación";

	let parrafo3 =
		"Actualmente me encuentro estudiando por mi cuenta y construyendo side projects para practicar lo aprendido sin embargo estoy decidido a estudiar ing. en sistemas para profesionalizar mi conocimiento.\n\n" +
		"Utilizo plataformas como Platzi, Udemy y Openbootcamp entre otras para aprender la teoría";

	let parrafo4 =
		"Actualmente me encuentro estudiando por mi cuenta y construyendo side projects para practicar lo aprendido sin embargo estoy decidido a estudiar ing. en sistemas para profesionalizar mi conocimiento.\n" +
		"Utilizo plataformas como Platzi, Udemy, Openbootcamp entre otras para aprender la teoría.\n\n" +
		"Me encuentro profundizado mis conocimientos en React como librería principal pero también trabajo con Next, Redux y tailwind.\n" +
		"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés (B1) para mejorar mi capacidad de comunicarme en un entorno global.";

	let parrafo5 =
		"Actualmente me encuentro estudiando por mi cuenta y construyendo side projects para practicar lo aprendido sin embargo estoy decidido a estudiar ing. en sistemas para profesionalizar mi conocimiento.\n" +
		"Utilizo plataformas como Platzi, Udemy, Openbootcamp entre otras para aprender la teoría.\n\n" +
		"Me encuentro profundizado mis conocimientos en React como librería principal de Js, next, redux y tailwind.\n" +
		"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés (B1) para mejorar mi capacidad de comunicarme en un entorno global.\n\n" +
		"Mi viaje en la industria tech recién comienza, pero ha sido una montaña rusa de aprendizaje y crecimiento. Más allá de las habilidades técnicas, he aprendido a resolver problemas de manera creativa y comprometerme con el aprendizaje continuo como filosofía personal.";

	const projectsRef = useRef(null);
	const aboutMeRef = useRef(null);
	const contactRef = useRef(null);
	const homeRef = useRef(null);
	const [moreData, setMoreData] = useState("");

	return (
		<generalContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				parrafo1,
				parrafo2,
				parrafo3,
				parrafo4,
				parrafo5,
				projectsRef,
				aboutMeRef,
				contactRef,
				moreData,
				setMoreData,
				homeRef,
			}}>
			{children}
		</generalContext.Provider>
	);
}

export { GeneralContext, generalContext };
