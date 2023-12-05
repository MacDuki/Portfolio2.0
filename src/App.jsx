import "./App.css";
import { Home } from "./Components/Home/Home";
import { GeneralContext } from "./Context/GeneralContext";
function App() {
	return (
		<main>
			<GeneralContext>
				<Home />
			</GeneralContext>
		</main>
	);
}

export default App;
