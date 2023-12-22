import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { generalContext } from "../../Context/GeneralContext";
import styles from "./AnimatedParagraph.module.css";
import profileStyles from "./profileStyle.module.css";

function AboutForm() {
	const { parrafo1, parrafo2, parrafo3, parrafo4, parrafo5 } =
		useContext(generalContext);
	const [parrafo, setParrafo] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [heightP, setHeightP] = useState("");
	let value;
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
		<motion.div
			className='flex flex-col items-center w-5/6 h-auto justify-center'
			layout>
			{isVisible ? (
				<div className='text-6xl flex w-full items-center justify-center'>
					<IoIosClose
						onClick={() => {
							setSelectedOption("");
							setParrafo("");
							setHeightP("");
							setIsVisible(false);
						}}
					/>
				</div>
			) : (
				<AnimatePresence>
					<motion.div
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						exit={{ y: -100, opacity: 0 }}
						transition={{ ease: "easeOut", duration: 0.5 }}
						className='w-96 relative h-auto '
						style={{
							backgroundImage: "url('src/assets/circleProfileContainer.svg')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "contain",
							backgroundPosition: "center",
						}}>
						<img
							alt=' '
							className={`relative  mt-14  w-full  h-auto ${profileStyles.floatPicture} `}
							src='src\assets\circle profile.png'
						/>
					</motion.div>
				</AnimatePresence>
			)}

			<div className=' w-full h-20 flex items-center justify-center md:w-96'>
				<div className='text-center flex items-center justify-center w-full border-none'>
					<div className=' border border-black bg-slate-600 p-8 z-50 rounded-lg flex justify-between w-full'>
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
						</div>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						exit={{ x: 300, opacity: 0 }}
						transition={{ ease: "easeOut", duration: 0.5 }}
						className={`flex items-center mt-8 w-full mx-6  ${heightP} border border-black rounded-lg overflow-hidden ${styles.paragraph} `}>
						<p className='px-2 py-4'>{parrafo}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export { AboutForm };
