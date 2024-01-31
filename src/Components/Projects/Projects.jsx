import { motion } from "framer-motion";
import { default as React } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaCss3Alt, FaGithub, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { generalContext } from "../../Context/GeneralContext";
import { MinimizedProjects } from "./MinimizedProjects.jsx";
import { ProjectInfo } from "./ProjectInfo.jsx";
import "./animationDelay.css";

function Projects() {
	const { projectsRef, moreData, setMoreData } =
		React.useContext(generalContext);

	return (
		<section
			ref={projectsRef}
			className='bg-slate-200 flex flex-col items-center justify-center relative '>
			<img
				alt='wave'
				className='select-none absolute top-[-1px] '
				src='src\assets\waveH1.svg'
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
				className='select-none text-6xl mt-60 mb-10 mx-auto font-tittle font-bold text-slate-600 md:text-8xl '>
				Projects
			</motion.h2>

			<div className='select-none  w-full md:w-5/6 lg:w-4/6 relative h-5/6 flex flex-col p-5 lg:p-10 rounded-2xl items-center justify-center  gap-5'>
				{moreData ? <ProjectInfo /> : <MinimizedProjects />}
			</div>
			{!moreData && (
				<div className='px-5 mt-16'>
					<label className='flex flex-wrap flex-start items-center justify-center flex-row text-5xl gap-5  w-full h-auto  lg:gap-10 '>
						<span className=''>
							<FaReact />
						</span>
						<span className='   '>
							<FaNodeJs />
						</span>
						<span className='  '>
							<FaGithub />
						</span>
						<span className=' '>
							<RiJavascriptFill />
						</span>
						<span className='   '>
							<FaCss3Alt />
						</span>
						<span className='  '>
							<SiTailwindcss />
						</span>
						<span className=''>
							<SiExpress />
						</span>
						<span className=' '>
							<SiNextdotjs />
						</span>
						<span className='   '>
							<FaAws />
						</span>
						<span className='  '>
							<BiLogoPostgresql />
						</span>
					</label>
				</div>
			)}

			<img
				alt='wave'
				className='select-none transform scale-y-[-1] scale-x-[-1] '
				src='src\assets\waveAboutUp.svg'
			/>
		</section>
	);
}

export { Projects };
