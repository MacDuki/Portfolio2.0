import { motion } from "framer-motion";

function Projects() {
	return (
		<section className='bg-slate-200 flex flex-col items-center justify-center relative'>
			<img alt='' src='src\assets\projectWave.svg' />
			<h2 className='text-6xl absolute top-6 mx-auto'>Projects</h2>
			<div className='bg-slate-400 h-5/6 w-5/6 flex flex-col items-center justify-center lg:flex-row gap-5'>
				<div>
					<img className='w-60 h-60 border-2 border-black' alt='' src='' />
				</div>
				<div>
					<img className='w-60 h-60 border-2 border-black' alt='' src='' />
				</div>
				<div>
					<img className='w-60 h-60 border-2 border-black' alt='' src='' />
				</div>
			</div>

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
				alt=''
				src='src\assets\projectWaveFloor.svg'
			/>
		</section>
	);
}

export { Projects };
