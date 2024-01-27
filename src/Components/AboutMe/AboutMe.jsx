import { motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../Context/GeneralContext";
import { AboutForm } from "./AboutForm";
function AboutMe() {
	const { aboutMeRef } = React.useContext(generalContext);
	return (
		<motion.section
			layout
			ref={aboutMeRef}
			className='bg-slate-500 min-h-full flex flex-col items-center justify-start relative'>
			<img
				alt='wave'
				src='src\assets\waveAboutUp.svg'
				className=' select-none'
			/>
			<motion.h2
				whileInView={{ opacity: 1, scale: 1 }}
				initial={{ opacity: 0, scale: 0 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
					duration: 0.1,
				}}
				className=' select-none mt-6 mb-16 text-6xl mx-auto font-tittle font-bold text-bgLight md:text-8xl '>
				AboutMe
			</motion.h2>
			<AboutForm />

			<img alt='wave' src='src\assets\waveAbout.svg' className='mt-80 ' />
		</motion.section>
	);
}

export { AboutMe };
