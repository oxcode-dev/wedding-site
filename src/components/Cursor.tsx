import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

     useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setPosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="hidden md:inline-flex items-center justify-center rounded-full w-10 h-10 fixed z-[99999999] border-2 border-red-600 bg-white/40"
            animate={{ x: position.x+10, y: position.y+10 }}
            >
            <span className="text-lg text-red-600">&hearts;</span>
        </motion.div>
    );
};