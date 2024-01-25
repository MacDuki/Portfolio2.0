import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ImCross } from "react-icons/im";
import { generalContext } from "../../Context/GeneralContext";
function ProjectInfo() {
	const { moreData, setMoreData } = React.useContext(generalContext);
	function handleMoreData() {
		if ("Ecommerce" === moreData) {
			return (
				<div className='relative w-full h-full  flex flex-col items-center justify-center gap-7'>
					<img
						className='w-full h-full rounded-md'
						alt='pagina de ecommerce'
						src='src\assets\home.png'
					/>
					<p className='text-2xl'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, natus
						porro ut aliquid at doloremque labore suscipit iste illum magni
						officia. Impedit, ab. Facere sint totam at nisi id illo.
					</p>
				</div>
			);
		} else if ("Organizer" === moreData) {
		} else if ("..." === moreData) {
		}
	}

	return (
		<AnimatePresence>
			{moreData && (
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -200 }}
					exit={{ opacity: 0, x: -200 }}
					transition={{
						type: "spring",
						stiffness: 363,
						damping: 80,
						mass: 4,
					}}
					className='flex flex-col gap-7'>
					<div className='flex flex-col md:flex-row w-full items-center justify-between'>
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
		</AnimatePresence>
	);
}

export { ProjectInfo };
