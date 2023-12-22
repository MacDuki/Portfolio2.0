import React, { useEffect } from "react";
import { AboutMe } from "../src/Components/AboutMe/AboutMe";
import "./App.css";
import { Contact } from "./Components/Contact/Contact";
import { Home } from "./Components/Home/Home";
import { Projects } from "./Components/Projects/Projects";
import { GeneralContext } from "./Context/GeneralContext";
function App() {
	useEffect(() => {
		const handleLoad = () => {
			window.scrollTo(0, 0);
		};

		window.addEventListener("load", handleLoad);

		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, []);
	return (
		<GeneralContext>
			<main className='overflow-x-hidden'>
				<Home />
				<Projects />
				<AboutMe />
				<Contact />
			</main>
		</GeneralContext>
	);
}

export default App;
