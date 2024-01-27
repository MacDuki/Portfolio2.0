import { motion } from "framer-motion";
import React from "react";
import { generalContext } from "../../Context/GeneralContext";
import { AnimatedWave } from "./AnimatedWave";
import { ContactForm } from "./ContactForm";
import { SocialMedia } from "./SocialMedia";

function Contact() {
	const { contactRef } = React.useContext(generalContext);
	return (
		<section
			ref={contactRef}
			className=' min-h-screen flex flex-col items-center justify-start relative'>
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
				className='select-none  mb-16 text-6xl mx-auto font-tittle font-bold text-bgLight md:text-8xl z-50 '>
				Contact Me
			</motion.h2>

			<div className='flex flex-col md:flex-row items-center  justify-center w-full relative gap-10 md:gap-20'>
				<SocialMedia />
				<ContactForm />
			</div>
		</section>
	);
}

export { Contact };
