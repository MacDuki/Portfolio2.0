import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaCss3Alt, FaGithub, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "./animationDelay.css";

function Projects() {
	return (
		<section className='bg-slate-200 flex flex-col items-center justify-center relative'>
			<img alt='' className='select-none' src='src\assets\projectWave.svg' />
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
				className='select-none text-6xl absolute top-1 mx-auto font-tittle font-bold text-bgLight md:text-8xl md: top-6'>
				Projects
			</motion.h2>
			<div className='bg-slate-300 h-5/6 w-5/6 flex flex-col p-40 rounded-lg items-center justify-center lg:flex-row gap-5'>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -200 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className='w-60 h-60 bg-red-700 border-2 border-black cursor-pointer'>
					<img className='w-60 h-60 border-2 border-black' alt='' src='' />
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -200 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className='w-60 h-60 bg-red-700 border-2 border-black cursor-pointer'>
					<img className='w-60 h-60 border-2 border-black' alt='' src='' />
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -200 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 1 }}
					className='w-60 h-60 bg-red-700 border-2 border-black cursor-pointer'>
					<img className='w-60 h-60 border-2 border-black' alt='' src='' />
				</motion.div>
			</div>
			<div className='px-5 mt-16'>
				<label className='flex flex-wrap flex-start items-center justify-center flex-row text-5xl gap-5  w-full h-auto  lg:gap-10 '>
					<span className='delay-100   animate-bounce'>
						<FaReact />
					</span>
					<span className='delay-200   '>
						<FaNodeJs />
					</span>
					<span className='delay-300  '>
						<FaGithub />
					</span>
					<span className='delay-400 '>
						<RiJavascriptFill />
					</span>
					<span className='delay-500   '>
						<FaCss3Alt />
					</span>
					<span className='delay-600   '>
						<SiTailwindcss />
					</span>
					<span className='delay-700 '>
						<SiExpress />
					</span>
					<span className='delay-800 '>
						<SiNextdotjs />
					</span>
					<span className='delay-900   '>
						<FaAws />
					</span>
					<span className='delay-1000   '>
						<BiLogoPostgresql />
					</span>
				</label>
			</div>
			<img
				alt=''
				className='select-none'
				src='src\assets\projectWaveFloor.svg'
			/>
		</section>
	);
}

export { Projects };
