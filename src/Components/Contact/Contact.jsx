import { motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../Context/GeneralContext";
import { AnimatedWave } from "./AnimatedWave";
import { ContactForm } from "./ContactForm";

function Contact() {
	const { contactRef } = React.useContext(generalContext);
	return (
		<section
			ref={contactRef}
			className='bg-slate-200  min-h-screen flex flex-col items-center justify-start relative'>
			<AnimatedWave />
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
				className='select-none mt-6 mb-16 text-6xl mx-auto font-tittle font-bold text-bgWaveLight md:text-8xl absolute '>
				Contact Me
			</motion.h2>
			<ContactForm />
		</section>
	);
}

export { Contact };
