import React, { useState } from "react";
import { TitleBox } from "./TitleBox";
import { motion, AnimatePresence } from 'framer-motion'
import { bridemaids, groomsmen } from "../contant/index";


const tabs = ['bridemaids', 'groomsmen'];
const variants = {
    tabInitial: { x: 50, opacity: 0 },
    tabAnimate: { x: 0, opacity: 1 },
    tabTransition: { duration: 0.4 },
    boxInitial: { y: 10, opacity: 0 },
    boxAnimate: { y: 0, opacity: 1 },
    boxTransition: { duration: 0.4 },
    cardInitial: { y: 100, opacity: 0 },
    cardAnimate: { y: 0, opacity: 1 },
    cardTransition: { duration: 0.4 },
}
const PeopleCard = ({ person }) => {
    return (
        <>
            <motion.div 
                viewport={{ once: true }}
                variants={variants} initial="cardInitial" whileInView='cardAnimate' transition='cardTransition'
                className='h-full w-full relative group'
            >
                <motion.img src={person.img} variants={variants} className='h-full w-full object-cover' />
                <motion.div variants={variants} className='flex md:hidden md:group-hover:flex md:absolute w-full md:bg-gray-500/80 md:bottom-0 md:h-12'>
                    <motion.p variants={variants} className='text-gray-500 md:text-white text-xl sm:px-2 py-2'>{person?.name || 'N/A'}</motion.p>
                </motion.div>
            </motion.div>
        </>
    )
} 

const PeopleLists = ({ list }) => {
    const main = list.find(n => n.isChief === true)
    const friends = list.filter(n => n.isChief === false)
    return (
        <>
            <motion.div 
                variants={variants} initial="boxInitial" whileInView='boxAnimate' transition='boxTransition'
                className='flex flex-wrap w-full max-w-6xl mx-auto'
            >
                <motion.div variants={variants} className='w-full md:w-2/5 md:py-3 px-3 md:px-0'>
                    <motion.div variants={variants} className='h-full w-full pb-12 md:pb-0'>
                        <PeopleCard person={main} />
                    </motion.div>
                </motion.div>

                <motion.div variants={variants} className='flex flex-wrap w-full md:w-3/5'>
                {
                    friends.map((friend,num) => (
                        <motion.div variants={variants} key={num} className='w-full md:w-1/2 py-3'>
                            <motion.div variants={variants} className='px-3 relative'>
                                <motion.div variants={variants} className='h-full w-full'>
                                    <PeopleCard person={friend} />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))
                }
                </motion.div>
            </motion.div>
        </>
    )
}
const PeopleContainer = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
        <>
            <div>
                <nav>
                    <motion.div
                        variants={variants}
                        initial='tabInitial'
                        whileInView='tabAnimate'
                        transition='tabTransition'
                        className="w-full flex justify-center space-x-3"
                    >
                        {tabs.map((item) => (
                            <motion.button variants={variants}
                                key={item}
                                className={`${item === selectedTab ? "text-red-600 font-medium" : ""} relative capitalize`}
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item}`}
                                {item === selectedTab ? (
                                    <motion.div className="absolute left-0 right-0 h-1 w-6 mx-auto rounded -bottom-4 bg-red-600" layoutId="underline" />
                                ) : null}
                            </motion.button>
                        ))}
                    </motion.div>
                </nav>
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab ? selectedTab : "empty"}
                            variants={variants}
                            initial='boxInitial'
                            whileInView='boxAnimate'
                            exit='boxInitial'
                            transition='boxTransition'
                            className="pt-12"
                        >
                            {selectedTab === 'bridemaids' 
                                ? <div className="text-center">
                                    <PeopleLists list={bridemaids} />
                                </div>
                                : <div className="text-center">
                                    <PeopleLists list={groomsmen} />
                                </div>
                            }
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </>
    )
}
export const PeopleSection = () => {
    return (
        <>
            <div id='people' className='py-12 md:py-24 bg-white w-full h-full px-2 sm:px-4'>
                <div className='w-full mx-auto'>
                    <TitleBox title='Bridesmaid & Groomsmen' />

                    <div className='w-full mx-auto'>
                        <PeopleContainer />
                    </div>
                </div>
            </div>
        </>
    )
}