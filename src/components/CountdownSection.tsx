import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const CountDownSection = () => {
    const [days, setDays] = useState<number | string>(0)
    const [hours, setHours] = useState<number | string>(0)
    const [minutes, setMinutes] = useState<number | string>(0)
    const [seconds, setSeconds] = useState<number | string>(0)
    useEffect(() => {
        const countdown = () => {
            const currentTime : Date | number = new Date();
            const currentYear: number = currentTime.getFullYear();
            const xmasDate: Date | number = new Date(`June 24 ${currentYear + 1} 00:00:00`);

            // @ts-ignore
            const diff: number = xmasDate - currentTime;
    
            const d:number = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h:number = Math.floor(diff / 1000 / 60 / 60) % 24;
            const m:number = Math.floor(diff / 1000 / 60) % 60;
            const s:number = Math.floor(diff / 1000) % 60;
    
            setDays(d)
            setHours(h < 10 ? "0" + h : h)
            setMinutes(m < 10 ? "0" + m : m)
            setSeconds(s < 10 ? "0" + s : s)
        };

        setInterval(countdown, 1000);
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