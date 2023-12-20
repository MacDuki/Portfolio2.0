import { motion } from "framer-motion";
import { AboutForm } from "./AboutForm";

function AboutMe() {
	return (
		<section className='bg-slate-200 flex flex-col items-center justify-center relative'>
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
				className=' text-6xl absolute top-1 mx-auto font-tittle font-bold text-bgWaveLight md:text-8xl md:top-6'>
				AboutMe
			</motion.h2>
			<AboutForm />
		</section>
	);
}

export { AboutMe };
