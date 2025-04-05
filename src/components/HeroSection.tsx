import { motion } from 'framer-motion'
const hero = 'https://images.pexels.com/photos/1759823/pexels-photo-1759823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

export const HeroSection = () => {
    const variants = {
        initial: { scale: 0, transition: { staggerChildren: 0.1 }},
        animate: { scale: 1, transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3}},
    }
    return (
        <>
            <div className='h-screen w-full relative'>
                <div style={{ backgroundImage: `url(${hero})` }} className='h-full bg-norepeat bg-fixed bg-cover w-full absolute bg-center'></div>

                <motion.div variants={variants} initial='initial' whileInView='animate' className='h-full relative flex flex-col items-center justify-end pb-12 px-4 w-full'>
                    <motion.div variants={variants} whileHover={{ scale: 0.7}} className='text-white text-center bg-gray-900/30 p-8 md:p-20 border-l-8 border-gray-900/60 rounded'>
                        <motion.p variants={variants} className='text-xl'>Now Our Heart Together</motion.p>
                        <motion.h1 variants={variants} className='text-4xl md:text-6xl leading-loose tracking-wider py-8'>John & Vivian</motion.h1>
                        <motion.h5 variants={variants} className='text-2xl'>We're Getting Married</motion.h5>
                        {/* <h5 className='text-2xl'>23 June 2024</h5> */}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}
