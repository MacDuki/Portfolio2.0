import { motion } from "framer-motion";
import React from "react";
import { FaCss3Alt, FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
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
						src='src\assets\organizerInfo.png'
					/>
					<p className='text-2xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, natus
						porro ut aliquid at doloremque labore suscipit iste illum magni
						officia. Impedit, ab. Facere sint totam at nisi id illo.
					</p>
					<div className='flex items-center justify-center'></div>
					<a
						href='https://macduki.github.io/organizador-personal/'
						target='_blank'>
						<button class='bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'>
							<span class='bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
							Visite Site
						</button>
					</a>
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
					className='flex flex-col gap-7  p-5 rounded-lg bg-slate-50  '>
					<div className='flex flex-col gap-5 lg:gap-1 lg:flex-row w-full items-center justify-between'>
						<span
							onClick={() => {
								setMoreData("");
							}}
							class='bg-red-500 inline-block center w-5 h-5 cursor-pointer hover:scale-125 rounded-full transition-all'></span>
						<span class='bg-yellow-500 inline-block center w-5 h-5 cursor-pointer  hover:scale-125 rounded-full transition-all'></span>
						<span class='bg-green-500 box inline-block center w-5 h-5 cursor-pointer hover:scale-125 rounded-full transition-all'></span>
						<h3 className='mx-auto  font-tittle font-black  text-4xl'>
							{moreData}
						</h3>
					</div>
					{handleMoreData()}
				</motion.div>
			)}
		</>
	);
}

export { ProjectInfo };
