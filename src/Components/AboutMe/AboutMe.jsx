import { motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../Context/GeneralContext";
import { AboutForm } from "./AboutForm";
function AboutMe() {
	const { aboutMeRef } = React.useContext(generalContext);
	return (
		<section
			ref={aboutMeRef}
			className='bg-slate-200 min-h-full flex flex-col items-center justify-start relative'>
			<img
				alt='wave'
				src='src\assets\waveAboutUp.svg'
				className=' select-none absolute top-[-1px] '
			/>
			<motion.h2
				whileInView={{ opacity: 1, scale: 1, y: 0 }}
				initial={{ opacity: 0, scale: 0, y: -200 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
					duration: 0.8,
				}}
				className=' select-none mt-56  text-6xl mx-auto font-tittle font-bold text-slate-600 md:text-8xl '>
				About Me
			</motion.h2>
			<AboutForm />

			<img alt='wave' src='src\assets\waveAbout.svg' className='mt-80 ' />
		</section>
	);
}

export { AboutMe };
