import React, { useState, useEffect } from "react"
import { slugify } from "../helper";
import { AnimatePresence, motion } from "framer-motion"
import { tabs } from "../contant";

const Links = ({ setIsToggled }) => {
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };
    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };

    const handleClick = (e) => {
        setIsToggled(false)
        // e.preventDefault()
    }
  
    return (
        <motion.div className="flex flex-col items-center justify-center space-y-6 pt-4 h-[70vh]" variants={variants}>
            {tabs.map((item) => (
                <motion.a
                    href={`#${slugify(item)}`}
                    onClick={e => handleClick(e)}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xl font-medium text-gray-500 capitalize"
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
};
export const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false)
    const variants = {
        initial: { y: -100, transition: { staggerChildren: 0.1 }},
        animate: { y: 0, transition: { duration: 0.75, staggerChildren: 0.1, delayChildren: 0.3}},
        toggle: {opacity: 1},
        close: {opacity: 0},
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            // opacity: 1,
            transition: {
                delay: 0.5,
            },
        },
        closed: {
            clipPath: "circle(0px at 0 0)",
            // opacity: 0,
            transition: {
                delay: 0.5,
            },
        },
    }

    const handleOpenModal = (e) => {
        setIsToggled(!isToggled)
        e.preventDefault();
    }

    useEffect(() => {
        document.body.style.overflow = isToggled ? 'hidden' : 'auto'
    }, [isToggled])
    return (
        <>
            <div className='h-20 bg-gray-900/30 w-full text-white fixed z-50'>
                <div className='h-full flex items-center w-full justify-between max-w-6xl mx-auto md:px-0 px-4'>
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <div className='h-full flex flex-col items-center justify-center'>
                            <motion.h1
                                variants={variants}
                                initial='initial'
                                animate='animate'
                                className='text-3xl'
                            >
                                <a href="#">Jovian&hearts;2024</a>
                            </motion.h1>
                        </div>

                        <AnimatePresence>
                            <motion.a 
                                onClick={e => handleOpenModal(e)}
                                className="flex relative text-right flex-col space-y-2 md:hidden"href="#" 
                                variants={variants} animate={!isToggled ? 'toggle' : 'close'}
                            >
                                <span className="w-6 h-1 bg-white rounded"></span>
                                <span className="w-3 h-1 bg-white rounded"></span>
                            </motion.a>
                        </AnimatePresence>
                        
                    </div>
                    <nav className='w-auto h-full md:flex hidden'>
                        <motion.div
                            variants={variants}
                            initial='initial' animate='animate' 
                            className='flex space-x-3 pt-2'
                        >
                            {tabs.map((tab, key) => (
                                <motion.a 
                                    variants={variants}
                                    key={key} href={`#${slugify(tab)}`} className='w-auto pt-3 px-2 capitalize'
                                >
                                    {tab}
                                </motion.a>
                            ))}
                        </motion.div>
                    </nav>
                </div>
            </div>
            <motion.div className="flex flex-col items-center justify-center text-gray-700 bg-white" animate={isToggled ? "open" : "closed"}>
                <motion.div className="fixed top-0 left-0 bottom-0 bg-white w-full z-[1000000]" variants={variants}>
                    <div className="pt-4 flex justify-between px-4 items-center absolute w-full">
                        <h1 href="#"
                            className='text-3xl text-red-600'
                        >
                            <a href="#">Jovian&hearts;2024</a>
                        </h1>
                        <motion.a 
                            href="#"
                            onClick={e => handleOpenModal(e)}
                            className="flex flex-col relative space-y-2 md:hidden pr-4" 
                            variants={variants} animate={isToggled ? 'toggle' : 'close'}
                        >
                            <span className="w-6 h-1 bg-gray-600 rounded rotate-45 absolute top-0"></span>
                            <span className="w-6 h-1 bg-gray-600 rounded -rotate-45 absolute -top-2"></span>
                        </motion.a>
                    </div>
                    <div className="px-4 py-6">
                        <Links setIsToggled={setIsToggled} />
                    </div>
                </motion.div>

            </motion.div>
        </>
    )
}

