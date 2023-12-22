import { motion } from "framer-motion";
import { AboutForm } from "./AboutForm";

function AboutMe() {
	return (
		<section className='bg-slate-200   pb-72  min-h-screen flex flex-col items-center justify-start relative'>
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
				className='mt-6 mb-16 text-6xl mx-auto font-tittle font-bold text-bgWaveLight md:text-8xl '>
				AboutMe
			</motion.h2>
			<AboutForm />
		</section>
	);
}

export { AboutMe };
