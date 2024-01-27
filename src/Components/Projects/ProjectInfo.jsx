import { motion } from "framer-motion";
import React from "react";
import { FaCss3Alt, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { generalContext } from "../../Context/GeneralContext";

function ProjectInfo() {
	const { moreData, setMoreData } = React.useContext(generalContext);
	function handleMoreData() {
		if ("Garage Shop" === moreData) {
			return (
				<div className='relative w-full h-full  flex flex-col items-center justify-center gap-7'>
					<img
						className='w-full h-full rounded-md'
						alt='pagina de ecommerce'
						src='src\assets\home2.png'
					/>
					<p className='text-2xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, natus
						porro ut aliquid at doloremque labore suscipit iste illum magni
						officia. Impedit, ab. Facere sint totam at nisi id illo.
					</p>
					<div className='flex items-center justify-center'>
						<label className='flex  flex-wrap items-center justify-center flex-row text-5xl gap-5  h-auto  lg:gap-10 '>
							<span className='delay-100  '>
								<FaGithub />
							</span>
							<span className='delay-200 '>
								<RiJavascriptFill />
							</span>
							<span className='delay-300   '>
								<FaCss3Alt />
							</span>
							<span className='delay-400   '>
								<FaReact />
							</span>
							<span className='delay-500 animate-bounce '>
								<TbBrandFramerMotion />
							</span>
						</label>
					</div>
					<button className='button-to-p'>
						<a
							className='no-underline decoration-inherit '
							href='https://ecommerce-react-e965a.web.app/'
							target='_blank'>
							Visite Site
						</a>
					</button>
				</div>
			);
		} else if ("Personal Organizer" === moreData) {
			return (
				<div className='relative w-full h-full  flex flex-col items-center justify-center gap-7'>
					<img
						className='w-full h-full rounded-md'
						alt='pagina de ecommerce'
						src='src\assets\organizer.png'
					/>
					<p className='text-2xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, natus
						porro ut aliquid at doloremque labore suscipit iste illum magni
						officia. Impedit, ab. Facere sint totam at nisi id illo.
					</p>
					<div className='flex items-center justify-center'>
						<label className='flex flex-wrap flex-start items-center justify-center flex-row text-5xl gap-14 md:gap-5  w-full h-auto  lg:gap-10 '>
							<span className='delay-100 '>
								<FaGithub />
							</span>
							<span className='delay-200 '>
								<RiJavascriptFill />
							</span>
							<span className='delay-300   '>
								<FaCss3Alt />
							</span>
							<span className='delay-400   '>
								<FaReact />
							</span>
							<span className='delay-500 animate-bounce '>
								<TbBrandFramerMotion />
							</span>
							<span className='delay-600   '>
								<SiTailwindcss />
							</span>
						</label>
					</div>
					<button className='button-to-p'>
						<a
							className='no-underline decoration-inherit '
							href='https://ecommerce-react-e965a.web.app/'
							target='_blank'>
							Visite Site
						</a>
					</button>
				</div>
			);
		} else if ("..." === moreData) {
		}
	}

	return (
		<>
			{moreData && (
				<motion.div
					animate={{ opacity: 1, scale: 1, y: 0 }}
					initial={{ opacity: 0, scale: 0, y: 800 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					className='flex flex-col gap-7 border border-black p-5 rounded-md bg-slate-600'>
					<div className='flex flex-col gap-5 lg:gap-0 lg:flex-row w-full items-center justify-between'>
						<ImCross
							className='cursor-pointer text-2xl'
							onClick={() => {
								setMoreData("");
							}}
						/>
						<h3 className='mx-auto text-4xl'>{moreData}</h3>
					</div>
					{handleMoreData()}
				</motion.div>
			)}
		</>
	);
}

export { ProjectInfo };
