import { motion } from "framer-motion";
import bStyle from "./background.module.css";
function Home() {
	return (
		<section
			className={`flex flex-col items-center justify-center  ${bStyle.background}`}>
			<div className='w-full relative z-10 mb-20'>
				<div className='absolute inset-y-36 inset-x-1/3  flex flex-col items-center font-tittle cursor-default font-bold text-2xl text-bgWaveLight md:text-bgLight md:inset-y-32 md:text-3xl lg:inset-y-72 lg:text-5xl lg:text-bgLight'>
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
						className='w-auto whitespace-nowrap'>
						FullStack Developer
					</motion.h2>
				</div>
				<motion.img
					animate={{ y: 0 }}
					initial={{ y: 500 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					className='w-full h-full md:h-auto lg:h-auto'
					src='src\assets\waveH2.svg'
				/>
				<motion.img
					animate={{ y: 0 }}
					initial={{ y: -500 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					className='w-full h-full md:h-auto lg:h-auto'
					src='src\assets\waveH1.svg'
				/>
			</div>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</section>
	);
}

export { Home };
