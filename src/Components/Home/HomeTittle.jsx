import { motion } from "framer-motion";
import { useContext } from "react";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { generalContext } from "../../Context/GeneralContext";
import { Menu } from "./Menu";

function HomeTittle() {
	const { activeMenu, setActiveMenu } = useContext(generalContext);
	return (
		<div className='w-full h-full  relative z-10 2xl:h-1/2 2xl:mt-[-500px] '>
			<motion.img
				layout
				animate={{ y: 0 }}
				initial={{ y: 500 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
				}}
				className='w-full '
				src='src\assets\waveH1.svg'
			/>

			<motion.div
				layout
				className='flex flex-col items-center font-tittle cursor-default font-bold text-3xl h-auto  lg:min-h-0 2xl:min-h-0 text-bgWaveLight md:text-5xl lg:text-5xl '>
				<motion.div
					animate={{ scale: 1 }}
					initial={{ scale: 0 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					whileHover={{ scale: 1.5 }}
					whileTap={{ scale: 0.9 }}
					className='mb-10 cursor-pointer text-black text-7xl lg:text-6xl'
					onClick={() => {
						setActiveMenu(!activeMenu);
					}}>
					{activeMenu ? <CgClose /> : <CgMenuGridO />}
				</motion.div>
				<Menu />
			</motion.div>

			<motion.img
				layout
				animate={{ y: 0 }}
				initial={{ y: -500 }}
				transition={{
					type: "spring",
					stiffness: 363,
					damping: 80,
					mass: 4,
				}}
				className='w-full mt-[-2px] md:mt-5 lg:mt-80 xl:mt-36 2xl:mt-0'
				src='src\assets\waveH2.svg'
			/>
		</div>
	);
}

export { HomeTittle };
