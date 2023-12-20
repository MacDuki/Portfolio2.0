import { useContext, useState } from "react";
import { generalContext } from "../../Context/GeneralContext";

function AboutForm() {
	const { parrafo1, parrafo2, parrafo3, parrafo4, parrafo5 } =
		useContext(generalContext);
	const [parrafo, setParrafo] = useState("");

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
								onClick={() => {
									setParrafo(parrafo1);
								}}
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
								onClick={() => {
									setParrafo(parrafo2);
								}}
							/>
						</div>
						<div className='bio-input-action'>
							<input
								className='short'
								type='radio'
								id='radio-button-short'
								name='biolength'
								value='short'
								onClick={() => {
									setParrafo(parrafo3);
								}}
							/>
						</div>
						<div className='bio-input-action'>
							<input
								className='longer'
								type='radio'
								id='radio-button-longer'
								name='biolength'
								value='longer'
								onClick={() => {
									setParrafo(parrafo4);
								}}
							/>
						</div>
						<div className='bio-input-action'>
							<input
								className='longest'
								type='radio'
								id='radio-button-longest'
								name='biolength'
								value='longest'
								onClick={() => {
									setParrafo(parrafo5);
								}}
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
