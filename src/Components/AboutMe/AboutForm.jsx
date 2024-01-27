import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { generalContext } from "../../Context/GeneralContext";
import "./AboutStyles.css";
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
		<motion.div className='flex flex-col items-center w-5/6 h-5/6 justify-center my-5'>
			<AnimatePresence>
				<motion.div
					key='profile-container'
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					exit={{ opacity: 0 }}
					transition={{ ease: "easeOut", duration: 0.5 }}
					className='w-96 relative z-20'
					style={{
						backgroundImage: "url('src/assets/circleProfileContainer.svg')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						backgroundPosition: "center",
					}}>
					<img
						alt=' '
						className={`relative mt-14 w-full z-20 h-auto ${profileStyles.floatPicture}`}
						src='src\assets\circle profile.png'
					/>
				</motion.div>
			</AnimatePresence>
			<div className=' w-full h-20  flex items-center justify-center md:w-96 '>
				<div className='relative text-center flex items-center justify-center w-full border-none '>
					<div className='  bg-slate-600 p-8 z-50   rounded-full flex justify-between w-full shake-form'>
						<div className=''>
							<input
								className='shortest cursor-pointer w-5 h-5'
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
								className='shorter cursor-pointer'
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
								className='short cursor-pointer'
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
								className='longer cursor-pointer'
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
								className='longest cursor-pointer w-5 h-5'
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

			<motion.div layout className='flex flex-col items-center w-full h-full '>
				<AnimatePresence>
					{isVisible && (
						<motion.div
							layout
							initial={{ x: -600 }}
							animate={{ x: 0 }}
							exit={{ x: 600, opacity: 0 }}
							transition={{ ease: "easeOut", duration: 0.3 }}
							className={`flex items-center mt-2 w-full lg:w-1/2 mx-6  border-2 border-slate-700 rounded-3xl overflow-hidden ${styles.paragraph} `}>
							<div className='px-2 py-4 whitespace-pre-line select-none'>
								{parrafo}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
}

export { AboutForm };
