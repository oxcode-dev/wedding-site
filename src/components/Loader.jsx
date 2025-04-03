import { AnimatePresence, motion } from "framer-motion";

const variants = {
    slideIn: { x: '-100%', opacity: 0},
    hidden: { y: -10, opacity: 0, },
    show: { 
        y: 0,
        x: 0,
        opacity: 1,
    }
}

export const Loader = ({ isLoading }) => {
    
    return (
        <AnimatePresence>
            <motion.div 
                variants={variants}
                initial='slideIn' animate={isLoading ? "show" : "slideIn"} 
                transition={{ duration: 0.9, delay: 1}}
                className="fixed w-full bg-white h-screen z-[10000000]"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <motion.div
                        variants={variants}
                        initial='hidden' animate='show'
                        transition={{ type: "spring", duration: 0.4, delay: 0.4}}
                        className="animate-bounce relative"
                    >
                        <div className="absolute top-5 left-5 pl-0.5">
                            <div className="text-4xl text-red-600 animate-pulse">&hearts;</div>
                        </div>
                        <div className="animate-spin h-20 w-20 bg-transparent rounded-full border-8 border-t-red-500 border-gray-300">
                        </div>
                    </motion.div>
                    <div className='pt-8 flex flex-col items-center justify-center'>
                        <motion.h2
                            variants={variants}
                            initial='hidden' whileInView='show'
                            transition={{ type: "spring", duration: 0.4, delay: 0.5}}
                            className='text-3xl md:text-6xl text-red-600'
                        >Jovian&hearts;2024</motion.h2>

                        <motion.h5 className='text-xl md:text-3xl text-gray-600 py-6' 
                            variants={variants}
                            initial='hidden' whileInView='show'
                            transition={{ type: "spring", duration: 0.5, delay: 0.8}}
                        >
                            We're Getting Married
                        </motion.h5>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}