import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import { gsap } from 'gsap';

const Main = () => {
    useEffect(() => {
        
        let typeSplit = new SplitType('[animate]', {
            types: 'lines, words, chars',
            tagName: 'span'
        });

        gsap.from('[animate] .char', {
            y: '100%',
            opacity: 1,
            rotationZ: '10',
            duration: 0.65,
            ease: 'power1.out',
            stagger: 0.1,
        });
    }, []);

    return (
        <motion.div className='wavy-text flex items-center justify-center h-screen'>
            <h1 className='wavy-text text-5xl' animate='animate'>
                Your Wavy Text Here
            </h1>
        </motion.div>
    );
};

export default Main;