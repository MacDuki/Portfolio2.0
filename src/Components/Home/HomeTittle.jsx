import { motion } from "framer-motion";
import { useContext } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { generalContext } from "../../Context/GeneralContext";

function HomeTittle() {
	const { miValor } = useContext(generalContext);

	return (
		<div className='w-full h-full relative z-10 '>
			<motion.img
				animate={{ y: 0 }}
				initial={{ y: 500 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
				}}
				className='w-full '
				src='src\assets\waveH1.svg'
			/>
			<div className='flex flex-col items-center font-tittle cursor-default font-bold text-3xl h-5/6 md:h-4/6 text-bgWaveLight md:text-5xl lg:text-5xl lg:h-auto '>
				<motion.div
					animate={{ scale: 1 }}
					initial={{ scale: 0 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 1.9 }}
					whileTap={{ scale: 0.9 }}
					className='mb-10 cursor-pointer text-black'>
					<CgMenuGridO />
				</motion.div>

				<div className='flex flex-col items-center'>
					<motion.h1
						animate={{ y: 0 }}
						initial={{ y: 500 }}
						transition={{
							type: "spring",
							stiffness: 363,
							damping: 80,
							mass: 4,
						}}
						className='w-auto whitespace-nowrap '>
						Pedro Wattimo
					</motion.h1>
					<motion.h2
						animate={{ y: 0 }}
						initial={{ y: -500 }}
						transition={{
							type: "spring",
							stiffness: 363,
							damping: 80,
							mass: 4,
						}}
						className='w-auto whitespace-nowrap z-20'>
						FullStack Developer
					</motion.h2>
				</div>
			</div>

			<motion.img
				animate={{ y: 0 }}
				initial={{ y: -500 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
				}}
				className='w-full'
				src='src\assets\waveH2.svg'
			/>
		</div>
	);
}

export { HomeTittle };
