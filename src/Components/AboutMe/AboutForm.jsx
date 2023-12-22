import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { generalContext } from "../../Context/GeneralContext";
import styles from "./AnimatedParagraph.module.css";
function AboutForm() {
	const { parrafo1, parrafo2, parrafo3, parrafo4, parrafo5 } =
		useContext(generalContext);
	const [parrafo, setParrafo] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [heightP, setHeightP] = useState("");
	let value;
	let heightValue;
	function handleOptionChange(event) {
		value = event.target.value;
		if (selectedOption === value) {
			setSelectedOption("");
			setParrafo("");
			setHeightP("");
			setIsVisible(false);
		} else {
			setSelectedOption(value);
			setIsVisible(true);
			switch (value) {
				case "shortest":
					setParrafo(parrafo1);
					setHeightP("h-9");
					break;
				case "shorter":
					setParrafo(parrafo2);
					setHeightP("h-36");
					break;
				case "short":
					setParrafo(parrafo3);
					setHeightP("h-56");
					break;
				case "longer":
					setParrafo(parrafo4);
					setHeightP("h-80");
					break;
				case "longest":
					setParrafo(parrafo5);
					setHeightP("h-96");
					break;
				default:
					setParrafo("");
					setHeightP("");
			}
		}
	}

	return (
		<>
			{isVisible && (
				<IoIosClose
					onClick={() => {
						setSelectedOption("");
						setParrafo("");
						setHeightP("");
						setIsVisible(false);
					}}
					className='mt-36 text-6xl '
				/>
			)}
			<div className='w-96 h-20 flex items-center '>
				<div className='text-center w-full border-none'>
					<div className=' flex justify-between'>
						<div className=''>
							<input
								className='shortest'
								type='radio'
								id='radio-button-shortest'
								name='biolength'
								value='shortest'
								checked={selectedOption === "shortest"}
								onChange={handleOptionChange}
								onClick={handleOptionChange}
							/>
							<label htmlFor='radio-button-shortest'>
								<span className='span-form'>Menos</span>
							</label>
						</div>
						<div className=''>
							<input
								className='shorter'
								type='radio'
								id='radio-button-shorter'
								name='biolength'
								value='shorter'
								checked={selectedOption === "shorter"}
								onChange={handleOptionChange}
								onClick={handleOptionChange}
							/>
						</div>
						<div className=''>
							<input
								className='short'
								type='radio'
								id='radio-button-short'
								name='biolength'
								value='short'
								checked={selectedOption === "short"}
								onChange={handleOptionChange}
								onClick={handleOptionChange}
							/>
						</div>
						<div className=''>
							<input
								className='longer'
								type='radio'
								id='radio-button-longer'
								name='biolength'
								value='longer'
								checked={selectedOption === "longer"}
								onChange={handleOptionChange}
								onClick={handleOptionChange}
							/>
						</div>
						<div className=''>
							<input
								className='longest'
								type='radio'
								id='radio-button-longest'
								name='biolength'
								value='longest'
								checked={selectedOption === "longest"}
								onChange={handleOptionChange}
								onClick={handleOptionChange}
							/>
							<label htmlFor='radio-button-longest'>
								<span className='span-form'>Más</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						exit={{ x: 1000 }}
						className={`flex items-center mt-8 w-96 ${heightP} border border-black rounded-lg overflow-hidden ${styles.paragraph} `}>
						<p className='px-2 py-4'>{parrafo}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export { AboutForm };
