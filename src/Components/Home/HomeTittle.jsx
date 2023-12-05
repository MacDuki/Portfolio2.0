import { motion } from "framer-motion";

function HomeTittle() {
	return (
		<div className='w-full relative z-10 '>
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
				src='src\assets\waveH2.svg'
			/>
			<div className='flex flex-col items-center font-tittle cursor-default font-bold text-2xl my-10 text-bgWaveLight md:text-3xl lg:text-5xl '>
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
			<motion.img
				animate={{ y: 0 }}
				initial={{ y: -500 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
				}}
				className='w-full '
				src='src\assets\waveH1.svg'
			/>
		</div>
	);
}

export { HomeTittle };
