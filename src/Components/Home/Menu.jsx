import { motion } from "framer-motion";
import { useContext } from "react";
import { generalContext } from "../../Context/GeneralContext";

function Menu() {
	const { activeMenu, setActiveMenu } = useContext(generalContext);

	if (activeMenu) {
		return (
			<div className='flex flex-col items-center min-h-600 lg:min-h-810 xl:min-h-280 2xl:min-h-0'>
				<div className='w-5/6 flex flex-col text-center items-center justify-center gap-6 mx-4 md:flex-row lg:mx-10'>
					<motion.div
						animate={{ x: 0 }}
						initial={{ x: 500 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: "spring",
							stiffness: 363,
							damping: 80,
							mass: 4,
						}}
						className=' select-none w-full bg-slate-900 px-2 py-1 rounded-lg cursor-pointer'>
						Projects
					</motion.div>
					<motion.div
						animate={{ y: 0 }}
						initial={{ y: 500, x: 0 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: "spring",
							stiffness: 363,
							damping: 80,
							mass: 4,
						}}
						className='w-full select-none bg-slate-900 px-2 py-1 rounded-lg cursor-pointer'>
						Contact
					</motion.div>
					<motion.div
						animate={{ x: 0 }}
						initial={{ x: -500 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: "spring",
							stiffness: 363,
							damping: 80,
							mass: 4,
						}}
						className='w-full select-none bg-slate-900 px-2 py-1 whitespace-nowrap rounded-lg cursor-pointer'>
						About Me
					</motion.div>
				</div>
			</div>
		);
	} else if (!activeMenu) {
		return (
			<div className='flex flex-col items-center pt-10 lg:pt-0 min-h-560 lg:min-h-800 md:min-h-580 xl:min-h-350 2xl:min-h-0'>
				<motion.h1
					animate={{ y: 0 }}
					initial={{ y: 500, x: 0 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					className=' select-none w-auto whitespace-nowrap '>
					Pedro Wattimo
				</motion.h1>
				<motion.h2
					animate={{ y: 0 }}
					initial={{ y: -500, x: 0 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					className='select-none w-auto whitespace-nowrap z-20'>
					FullStack Developer
				</motion.h2>
			</div>
		);
	}
}

export { Menu };
