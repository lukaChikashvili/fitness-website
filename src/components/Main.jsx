import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import mandala from '../assets/mandla.png';

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
        <motion.div className=' flex items-center justify-center  h-screen flex-col gap-4 '>
            <h1 className='wavy-text font-bold inline-block ' animate='animate' style = {{fontSize: '80px', width: '400px'}}>
               Transform Your Body
            </h1>
            <h1 className='wavy-text font-semibold text-4xl ' animate = "animate" >Mind and Soul</h1>
           <h3>At Flexify</h3>

          <motion.img initial = {{opacity: 0, translateY: 20}}
                      animate = {{opacity: 1, translateY: 0}}
                      transition={{duration: 1, delay: 1.4}}
          
          src = {mandala} className='mandala absolute -z-10 right-36 top-56' />
        </motion.div>
    );
};

export default Main;