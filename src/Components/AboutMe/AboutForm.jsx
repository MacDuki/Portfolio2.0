import { useContext, useState } from "react";
import { generalContext } from "../../Context/GeneralContext";

function AboutForm() {
	const { parrafo1, parrafo2, parrafo3, parrafo4, parrafo5 } =
		useContext(generalContext);
	const [parrafo, setParrafo] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	let value;
	function handleOptionChange(event) {
		value = event.target.value;
		if (selectedOption === value) {
			setSelectedOption("");
			setParrafo("");
		} else {
			setSelectedOption(value);
			switch (value) {
				case "shortest":
					setParrafo(parrafo1);
					break;
				case "shorter":
					setParrafo(parrafo2);
					break;
				case "short":
					setParrafo(parrafo3);
					break;
				case "longer":
					setParrafo(parrafo4);
					break;
				case "longest":
					setParrafo(parrafo5);
					break;
				default:
					setParrafo("");
			}
		}
	}

	return (
		<>
			<div className='mt-60 w-96 h-20 flex items-center'>
				<div className='text-center w-full border-none'>
					<div className='bio-options-container flex justify-between'>
						<div className='bio-input-action'>
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
						<div className='bio-input-action'>
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
						<div className='bio-input-action'>
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
						<div className='bio-input-action'>
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
						<div className='bio-input-action'>
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
			<div className='flex items-center mt-8 w-96 border border-main-secondBackground-color rounded-lg overflow-hidden transition-all duration-500 px-4'>
				<p className='text-main-black-color w-auto h-auto text-left font-medium text-black'>
					{parrafo}
				</p>
			</div>
		</>
	);
}

export { AboutForm };
