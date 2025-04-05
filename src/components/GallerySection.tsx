import React, { useEffect, useState } from "react";
import { TitleBox } from "./TitleBox";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    hidden: {
        x: 50,
        y: 50,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
    },
}

interface ModalProps {
    isToggled: boolean,
    setToggled: () => void,
    children?: React.ReactNode
}

const Modal = ({ isToggled, setToggled, children }: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = isToggled ? 'hidden' : 'auto'
    }, [isToggled])

    return (
        <AnimatePresence>
            {isToggled && (
                <>
                    <motion.div onClick={setToggled} 
                        className="bg-gray-600/50 fixed top-0 left-0 right-0 w-full h-full z-[10000]"
                    ></motion.div>
                    <motion.div
                        className="fixed top-0 left-0 z-[10001] h-auto w-full"
                        initial={{ y: 10, x: '-50%', opacity: 0 }}
                        animate={{ y: 100, x: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                    >
                        <button className="absolute -top-5 right-[20%] text-gray-600 bg-white border rounded-full p-1" onClick={setToggled}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <motion.div className="mx-auto w-full md:max-w-xl h-auto flex flex-col items-center justify-center p-4">
                            {children}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export const GallerySection = () => {
    const [isToggled, setToggled] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
    const manImg: string = 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=800'

    const handleOpenModal = (e: React.FormEvent) => {
        setToggled(true)
        setSelectedImage(manImg)
        e.preventDefault();
    }
    return (
        <>
            <div id='gallery' className='py-12 md:py-24 bg-gray-100 w-full h-full px-2 sm:px-4'>
                <Modal setToggled={() => setToggled(false)} isToggled={isToggled}>
                    <div className="h-full w-full">
                        <img src={selectedImage} />
                    </div>
                </Modal>
                
                <div className='w-full mx-auto'>
                    <TitleBox title='Our Gallery' />

                    <div className='w-full mx-auto'>
                        <div className='flex flex-wrap w-full'>
                            {
                                [...Array(15).keys()].map(num => (
                                    <motion.div 
                                        variants={variants} 
                                        transition={{ delay: num * 0.2, type: "spring", duration: 0.75, ease: "easeOut",}} 
                                        initial='hidden' whileInView='show'
                                        key={num} 
                                        viewport={{ once: true }}
                                        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3'
                                    >
                                        <motion.div variants={variants} className='h-96 px-3 relative'>
                                            <a href="#" onClick={e => handleOpenModal(e)} className='h-full w-full relative'>
                                                <img className='h-full w-full object-cover' src={manImg} />

                                                <div className='absolute hover:bg-blue-700/30 bg-blue-800/10 top-0 w-full p-4 h-full z-10 from-60% bg-gradient-to-b from-transparent to-green-900/80'>
                                                </div>
                                            </a>
                                        </motion.div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}