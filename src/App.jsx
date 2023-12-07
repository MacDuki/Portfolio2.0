import "./App.css";
import { Home } from "./Components/Home/Home";
import { Projects } from "./Components/Projects/Projects";
import { GeneralContext } from "./Context/GeneralContext";
function App() {
	return (
		<main className='overflow-x-hidden'>
			<GeneralContext>
				<Home />
				<Projects />
			</GeneralContext>
		</main>
	);
}

export default App;
