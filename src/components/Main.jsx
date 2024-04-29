import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform   } from 'framer-motion';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import mandala from '../assets/mandla.png';

const Main = () => {

    const {scrollYProgress} = useScroll();


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
        <motion.div  className=' flex items-center pt-56 min-h-screen   flex-col gap-4 '   >
            <h1  className='wavy-text font-bold inline-block ' animate='animate' style = {{fontSize: '80px', width: '400px'}}>
            Transform Your Body
            </h1>
            <h1 className='wavy-text font-semibold text-4xl ' animate = "animate" >Mind and Soul</h1>
           <h3>At Flexify</h3>

          <motion.img initial = {{opacity: 0, translateY: 20}}
                      animate = {{opacity: 1, translateY: 0}}
                      transition={{duration: 1, delay: 1.4}}
          
          src = {mandala} className='mandala absolute -z-10 right-36 top-56' />

        <motion.div className='w-8 h-2 bg-orange-500 fixed bottom-0 left-0 origin-bottom-left' style={{scaleX: scrollYProgress}}></motion.div>
        </motion.div>
    );
};

export default Main;