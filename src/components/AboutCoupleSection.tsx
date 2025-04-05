import { motion } from 'framer-motion'
import { TitleBox } from './TitleBox.tsx'
export const AboutCoupleSection = () => {
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
    const groomImg = 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const brideImg = 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return(
        <>
            <div id='couple' className='py-12 md:py-24 bg-gray-100 w-full h-full'>
                <div className=' mx-auto'>
                    <TitleBox title='About The Couple' />
                    <div className='flex flex-wrap w-full'>
                        <div className='w-full md:w-1/2'>
                            <motion.img 
                                variants={variants}
                                initial='left' whileInView='animate'
                                 className='h-[340px] md:h-[600px] w-full object-cover object-top' src={brideImg}
                            />
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
                            <motion.div
                                variants={variants}
                                initial='right' whileInView='animate'
                                className='py-8 pl-2 px-2 sm:px-12'
                            >
                                <h3 className='text-2xl md:text-4xl font-semibold'>Vivian Doe</h3>
                                <p className='text-xl text-gray-500 inline-flex items-center space-x-2 py-4'>
                                    <span className='w-3 h-3 bg-pink-500'></span>
                                    <span>Bride</span>
                                </p>
                                <motion.p 
                                    variants={variants}
                                    initial='hidden' whileInView='show'
                                    className='text-lg py-4 text-gray-500'
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam cum repellat. Omnis repudiandae dolore placeat amet provident quibusdam veniam beatae iure cupiditate perferendis sit laboriosam unde, earum consectetur voluptatum?
                                </motion.p>
                                <motion.p 
                                    variants={variants}
                                    initial='hidden' whileInView='show'
                                    className='text-lg text-gray-500'
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam cum repellat. Omnis repudiandae dolore placeat amet provident quibusdam veniam beatae iure cupiditate perferendis sit laboriosam unde, earum consectetur voluptatum?
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex flex-wrap w-full'>
                        <div className='w-full md:w-1/2 md:order-2'>
                            <motion.img 
                                variants={variants}
                                initial='right' whileInView='animate' className='h-[340px] md:h-[600px] w-full object-cover object-top' src={groomImg}
                            />
                        </div>
                        <motion.div
                            variants={variants}
                            initial='left' whileInView='animate' 
                            className='w-full md:w-1/2 flex flex-col items-center justify-center'
                        >
                            <div className='py-8 pl-2 px-2 sm:px-12'>
                                <h3 className='text-2xl md:text-4xl font-semibold'>John Doe</h3>
                                <p className='text-xl text-gray-500 inline-flex items-center space-x-2 py-4'>
                                    <span className='w-3 h-3 bg-blue-500'></span>
                                    <span>Groom</span>
                                </p>
                                <motion.p 
                                    variants={variants}
                                    initial='hidden' whileInView='show'
                                    className='text-lg py-4 text-gray-500'
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam cum repellat. Omnis repudiandae dolore placeat amet provident quibusdam veniam beatae iure cupiditate perferendis sit laboriosam unde, earum consectetur voluptatum?
                                </motion.p>
                                <motion.p 
                                    variants={variants}
                                    initial='hidden' whileInView='show'
                                    className='text-lg text-gray-500'
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam cum repellat. Omnis repudiandae dolore placeat amet provident quibusdam veniam beatae iure cupiditate perferendis sit laboriosam unde, earum consectetur voluptatum?
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}