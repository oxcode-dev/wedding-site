import React from "react";
import {motion} from 'framer-motion'

export const TitleBox = ({ title }) => {
    const variants = {
        hidden: { y: -50, opacity: 0, },
        show: { 
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: 1,
            }
        },
    }
    return (
        <>
            <motion.div 
                variants={variants}
                initial='hidden' whileInView='show' 
                className='pb-8 text-center text-gray-500'
            >
                <motion.h2 variants={variants} className='text-3xl md:text-4xl text-gray-600'>
                    {title || 'N/A'}
                </motion.h2>
                <motion.p variants={variants} className='w-24 mx-auto relative before:absolute before:top-2.5 before:-left-8 before:w-10 before:h-0 before:border before:border-gray-500 after:absolute after:top-2.5 after:-right-8 after:w-10 after:h-0 after:border after:border-gray-500 '>
                    &hearts;&hearts;&hearts;
                </motion.p>
            </motion.div>
        </>
    )
}