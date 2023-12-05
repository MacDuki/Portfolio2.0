import { createContext, useState } from "react";

const generalContext = createContext();

function GeneralContext({ children }) {
	const [activeMenu, setActiveMenu] = useState(false);
	return (
		<generalContext.Provider value={{ activeMenu, setActiveMenu }}>
			{children}
		</generalContext.Provider>
	);
}

export { GeneralContext, generalContext };
