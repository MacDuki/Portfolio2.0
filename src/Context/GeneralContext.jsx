import { createContext, useState } from "react";

const generalContext = createContext();

function GeneralContext({ children }) {
	const [miValor, setMiValor] = useState("Valor de prueba");

	return (
		<generalContext.Provider value={{ miValor }}>
			{children}
		</generalContext.Provider>
	);
}

export { GeneralContext, generalContext };
