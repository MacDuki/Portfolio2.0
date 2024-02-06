import { motion } from "framer-motion";
import { default as React } from "react";
import { FaCalendarCheck, FaCss3Alt, FaGithub } from "react-icons/fa";
import { FaBasketShopping, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { generalContext } from "../../Context/GeneralContext";
import "./animationDelay.css";

function MinimizedProjects() {
	const { setMoreData } = React.useContext(generalContext);
	return (
		<>
			<div className='w-6/7 md:w-4/6 h-full lg:h-250 relative flex items-center justify-between flex-col md:flex-row text-bgLight bg-zinc-800  rounded-xl  '>
				<div className='w-1/2 min-h-140  flex flex-col items-center justify-start rounded-l-xl px-2 '>
					<div className='flex items-center justify-between w-full  px-0 md:px-2 lg:px-5'>
						<p className='  font-tittle font-black  text-2xl '>
							Personal Organizer
						</p>
						<FaCalendarCheck className='text-4xl' />
					</div>
					<div className='flex items-center justify-center'>
						<label className='mt-10 flex md:flex-wrap flex-start items-center justify-center flex-row text-4xl gap-5 md:gap-5  w-full h-auto  lg:gap-5 text-bgLight '>
							<span className='delay-100   animate-bounce'>
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

							<span className='delay-600   '>
								<SiTailwindcss />
							</span>
							<span className='delay-500 '>
								<TbBrandFramerMotion />
							</span>
						</label>
					</div>
					<div className='flex items-center justify-center mt-7 gap-2'>
						<p className='bg-[#5B442A] rounded-full px-2 font-bold text-yellow-300 text-xs'>
							PERSONAL
						</p>
						<p className='bg-[#32436C] rounded-full px-2 font-bold text-blue-200 text-xs'>
							WEB DEVELOPMENT
						</p>
					</div>
				</div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -200 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 0.9 }}
					onClick={() => {
						setMoreData("Personal Organizer");
					}}
					whileTap={{ scale: 0.9 }}
					className='mt-5 lg:mt-0 w-4/5 lg:w-1/2 cursor-pointer hover:rounded-xl flex min-h-140 items-end justify-center object-contain rounded-xl lg:rounded-r-xl   '>
					<img
						className='w-3/4  rounded-t-xl '
						alt='Personal Organizer'
						src='src\assets\Organizer.png'
					/>
				</motion.div>
			</div>

			<div className='w-6/7 md:w-4/6 h-full lg:h-250 relative flex flex-col md:flex-row-reverse items-center justify-between text-bgLight bg-zinc-800  rounded-xl  '>
				<div className='w-1/2 min-h-140  flex flex-col items-center justify-start rounded-r-xl px-2 '>
					<div className='flex items-center justify-between w-full px-0 md:px-2 lg:px-14'>
						<p className='  font-tittle font-black  text-2xl '>Garage Shop</p>

						<FaBasketShopping className='text-4xl' />
					</div>
					<div className='flex items-center justify-center'>
						<label className='mt-10 flex md:flex-wrap flex-start items-center justify-center flex-row text-4xl gap-5 md:gap-5  w-full h-auto  lg:gap-5 text-bgLight'>
							<span className='delay-100   animate-bounce'>
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
							<span className='delay-500 '>
								<TbBrandFramerMotion />
							</span>
						</label>
					</div>
					<div className='flex items-center justify-center mt-7 gap-2'>
						<p className='bg-[#5B442A] rounded-full px-2 font-bold text-yellow-300 text-xs'>
							PERSONAL
						</p>
						<p className='bg-[#32436C] rounded-full px-2 font-bold text-blue-200 text-xs'>
							WEB DEVELOPMENT
						</p>
					</div>
				</div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -200 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 0.9 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => {
						setMoreData("Garage Shop");
					}}
					className='mt-5 lg:mt-0 w-4/5 lg:w-1/2 cursor-pointer flex min-h-140 items-end justify-center object-contain rounded-xl lg:rounded-l-xl hover:rounded-xl    '>
					<img
						className='w-3/4  rounded-t-xl '
						alt='Personal Organizer'
						src='src\assets\home.png'
					/>
				</motion.div>
			</div>

			<div className='w-full h-full cursor-pointer  relative'>
				<motion.img
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
					className='w-full md:w-3/4 mx-auto cursor-pointer    object-cover  rounded-xl '
					alt='personal organizer img'
					src=''
				/>
			</div>
		</>
	);
}

export { MinimizedProjects };
