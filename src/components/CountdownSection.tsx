import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

export const CountDownSection = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        const countdown = () => {
            const currentTime = new Date();
            const currentYear = currentTime.getFullYear();
            const xmasDate = new Date(`June 24 ${currentYear + 1} 00:00:00`);

            const diff = xmasDate - currentTime;
    
            const d = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h = Math.floor(diff / 1000 / 60 / 60) % 24;
            const m = Math.floor(diff / 1000 / 60) % 60;
            const s = Math.floor(diff / 1000) % 60;
    
            setDays(d)
            setHours(h < 10 ? "0" + h : h)
            setMinutes(m < 10 ? "0" + m : m)
            setSeconds(s < 10 ? "0" + s : s)
        };

        const interval = setInterval(countdown, 1000);

        // clearInterval(interval)
    }, [])

    const variants = {
        up: { y: -100, transition: { staggerChildren: 0.1 }},
        down: { y: 100, transition: { staggerChildren: 0.1 }},
        left: { x: -100, transition: { staggerChildren: 0.1 }},
        right: { x: 100, transition: { staggerChildren: 0.1 }},
        animate: { x:0, y: 0, transition: { duration: 0.75, staggerChildren: 0.1, delayChildren: 0.3}},
    }
    return (
        <>
            <div className='py-12 md:py-24 px-4 bg-white w-full max-w-2xl mx-auto'>
                <motion.div 
                    variants={variants}
                    initial="up"
                    whileInView='animate'
                    className='text-center bg-transparent text-gray-500 space-y-3'
                >
                    <h3 className="text-xl">The final countdown to forever!</h3>
                    <p className="text-lg">Love is in the air and the countdown is on.</p>
                    <div className='py-4'>
                        <dl className='flex md:flex-nowrap flex-wrap justify-around'>
                            <motion.div
                                variants={variants} initial='left' whileInView='animate'
                                className="w-1/2 rounded-lg shadow border py-4"
                            >
                                <dt>Days</dt>
                                <dd className="numbers text-6xl">{days}</dd>
                            </motion.div>
                            <motion.div
                                variants={variants} initial='down' whileInView='animate'
                                className="w-1/2 rounded-lg shadow border py-4"
                            >
                                <dt>Hours</dt>
                                <dd className="numbers text-6xl">{hours}</dd>
                            </motion.div>
                            <motion.div
                                variants={variants} initial='down' whileInView='animate'
                                className="w-1/2 rounded-lg shadow border py-4"
                            >
                                <dt>Minutes</dt>
                                <dd className="numbers text-6xl">{minutes}</dd>
                            </motion.div>
                            <motion.div 
                                variants={variants} initial='right' whileInView='animate'
                                className="w-1/2 rounded-lg shadow border py-4"
                            >
                                <dt>Seconds</dt>
                                <dd className="numbers text-6xl">{seconds}</dd>
                            </motion.div>
                        </dl>
                    </div>
                </motion.div>
            </div>
        </>
    )
}