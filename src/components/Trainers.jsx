import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import fitness from '../assets/fitness.png';
import yoga from '../assets/yoga.png';
import swim from '../assets/swim.png';


const Trainers = () => {

    const services = [
        {
            id: 1,
            name: 'Fitness',
            img: fitness
        },

        {
            id: 2,
            name: 'Yoga',
            img: yoga
        },

        {
            id: 3,
            name: 'Swimming pool',
            img: swim
        }
    ];




    const aboutRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const aboutElement = aboutRef.current;

        const animateHeading = () => {
            let typeSplit = new SplitType(aboutElement.querySelector('.wavy-text'), {
                types: 'lines, words, chars',
                tagName: 'span'
            });

            gsap.from(aboutElement.querySelectorAll('.char'), {
                y: '100%',
                opacity: 0,
                rotationZ: '10',
                duration: 0.65,
                ease: 'power1.out',
                stagger: 0.1
            });
        };

 

        ScrollTrigger.create({
            trigger: aboutElement,
            start: 'top 75%',
            end: 'bottom 25%',
            once: true,
            onEnter: () => {
                animateHeading();
           
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

  return (
    <div className='min-h-screen p-24' ref = {aboutRef}>
       <motion.h1 animate = "animate" className='wavy-text text-3xl ' >Services</motion.h1>

      <div className=' flex items-center justify-center gap-8 p-8'>
         {services.map((value, i) => (
            <motion.div initial = {{opacity: 0, translateY: 20}} whileInView={{opacity: 1, translateY: 0}} transition={{duration: 1.2, delay: i * 0.25}} key={value.id} className='border-2 p-8 rounded-md shdadow-lg'>
                <img src = {value.img} className='w-96 h-96 object-cover' />
                 <p className='text-2xl text-center text-orange-500'>{value.name}</p>
                </motion.div>
         ))}
      </div>
    </div>
  )
}

export default Trainers
