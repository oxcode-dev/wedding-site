import { motion } from "framer-motion";
import { TitleBox } from "./TitleBox.tsx";
import { eventsDetails } from "../constant/index";

export const EventsSection = () => {
    const variants = {
        left: { x: -150, transition: { staggerChildren: 0.1 }},
        right: { x: 150, transition: { staggerChildren: 0.1 }},
        animate: { x: 0, y: 0, transition: { duration: 0.75, staggerChildren: 0.1, delayChildren: 0.3}},
        initial: { y: 100, transition: { staggerChildren: 0.1 }},
    }
    return (
        <div id='events' className='py-12 md:py-24 bg-gray-100 w-full h-full overflow-y-hidden'>
            <TitleBox title='Wedding Events' />
            <div className='w-full md:max-w-6xl mx-auto'>
                <div className='flex flex-wrap w-full'>
                    {eventsDetails.map((event, key) => (
                        <div className='w-full md:w-1/3' key={key}>
                            <motion.div 
                                variants={variants}
                                initial='initial' whileInView='animate' 
                                className='px-4 py-4'
                            >
                                <motion.div variants={variants} className='h-64'>
                                    <motion.img variants={variants} src={event.img} className='h-full object-cover object-center w-full' />
                                </motion.div>
                                <motion.div variants={variants} className='w-full bg-white text-gray-500 p-4 shadow space-y-2'>
                                    <motion.p initial='hidden' whileInView='show' variants={variants} className="font-medium text-xl">
                                        {event.title || 'N/A'}
                                    </motion.p>
                                    <motion.p variants={variants} initial='hidden' whileInView='show' className="text-sm text-gray-500">
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                    </motion.p>
                                    <motion.div variants={variants} initial='hidden' whileInView='show' className="inline-flex items-center space-x-2">
                                        <motion.span variants={variants}>&#128197; {event.date || 'N/A'}</motion.span> 
                                        <motion.span variants={variants}>&#128336; {event.time || 'N/A'}</motion.span>
                                    </motion.div>
                                    <motion.p variants={variants} initial='hidden' whileInView='show' className="text-sm font-medium">
                                        &#127963; {event.venue || 'N/A'}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}