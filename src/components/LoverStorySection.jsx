import { motion } from "framer-motion";
import React from "react";
import { TitleBox } from "./TitleBox.jsx";
import { loveStories } from "../contant/index.ts";

export const LoverStorySection = () => {
    const variants = {
        left: { x: -150, transition: { staggerChildren: 0.1 }},
        right: { x: 150, transition: { staggerChildren: 0.1 }},
        animate: { x: 0, transition: { duration: 1, staggerChildren: 0.1, delayChildren: 0.3}},
        hidden: { y: -50, opacity: 0, },
        show: { 
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: 1,
            }
        }
    }

    return (
        <>
            <div id='our-story' className='py-12 md:py-24 bg-white w-full h-full px-2 sm:px-4'>
                <div className='w-full md:max-w-5xl mx-auto'>
                    <TitleBox title='Our Love Journey' />
                    {
                        loveStories.map((story, num) => (
                            <div className='flex flex-wrap w-full h-full py-4 md:py-12 pl-4 sm:pl-0' key={num}>
                                <div className={`w-full md:w-1/2 flex justify-center ${num % 2 === 0 ? 'md:order-2 md:justify-end' : 'md:justify-start'}`}>
                                    <motion.div
                                        variants={variants}
                                        whileInView='animate' initial={num % 2 === 0 ? 'right' : 'left'}
                                        className={`w-64 h-64 md:w-80 md:h-80 flex`}
                                    >
                                        <motion.img variants={variants} className='rounded-full h-full w-full object-cover object-top' src={story.img} />
                                    </motion.div>
                                </div>
                                <div className='h-[74.5%] md:h-[53%] 2xl:h-[44%] w-0.5 md:left-[50%] bg-red-600 absolute'>
                                    <div className="absolute -top-3 -left-4 pl-0.5">
                                        <div className="border-2 border-white text-white text-xl bg-red-600 w-8 h-8 inline-flex justify-center items-center rounded-full">&hearts;</div>
                                    </div>
                                </div>
                                <div className='h-full w-full md:w-1/2 flex flex-col items-center justify-center pl-6 md:pl-0'>
                                    <motion.div
                                        variants={variants}
                                        whileInView='animate' initial={num % 2 === 0 ? 'left' : 'right'}
                                        className='py-8 pl-2 px-2 sm:px-12'
                                    >
                                        <motion.h3 variants={variants} className='text-xl md:text-3xl text-gray-600 font-medium'>{story.title || 'N/A'}</motion.h3>
                                        <motion.p variants={variants} className='text-base text-gray-500 inline-flex items-center space-x-2 py-2'>
                                            <motion.span variants={variants} className='w-3 h-3 bg-red-500'></motion.span>
                                            <motion.span variants={variants}>{story.date || 'N/A'}</motion.span>
                                        </motion.p>
                                        <motion.p 
                                            variants={variants}
                                            initial='hidden' whileInView='show'
                                            className='text-base py-4 text-gray-500'
                                        >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam cum repellat. Omnis repudiandae dolore placeat amet provident quibusdam veniam beatae iure cupiditate perferendis sit laboriosam unde, earum consectetur voluptatum?
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}