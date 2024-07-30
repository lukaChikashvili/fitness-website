import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import gym from '../assets/gym.png';

const About = () => {





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

        const animateParagraph = () => {
            gsap.from(aboutElement.querySelector('.about-text'), {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 1
            });
        };

        const animateParagraph2 = () => {
            gsap.from(aboutElement.querySelector('.about-text2'), {
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 1.5
            });
        };

        ScrollTrigger.create({
            trigger: aboutElement,
            start: 'top 75%',
            end: 'bottom 25%',
            once: true,
            onEnter: () => {
                animateHeading();
                animateParagraph();
                animateParagraph2();
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={aboutRef} className='min-h-screen px-12 flex items-center justify-between '>
            <div className='flex flex-col gap-8 '>
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='text-3xl p-12 wavy-text' animate="animate">
             <span className='text-orange-500 text-sm'>001.</span>  About Us
            </motion.h1>

            <p className='text-xl about-text w-4/5  leading-10'>
                At Flexify, we believe in empowering individuals to achieve their fitness goals and transform their lives.
                With a passion for health and wellness, we provide a dynamic and inclusive environment where everyone is welcome to embark on their fitness journey.
            </p>

            <p className='text-xl about-text2 w-4/55  leading-10'>
            At Flexify, we're committed to helping you reach your full potential, both physically and mentally. Join us today and experience the difference at Flexify - where fitness meets fun and community!
            </p>
            <motion.button 
               initial = {{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 1.2, delay: 1}}
            
            className='bg-orange-500 w-56 py-2 px-8 rounded-md border-2 border-orange-500 text-white shadow-lg duration-500 ease-in hover:bg-white hover:text-orange-600 ' >Contact us</motion.button>
            </div>

            <motion.img 
             initial = {{opacity: 0, translateX: 20}}
             whileInView={{opacity: 1, translateX: 0}}
             transition={{duration: 1.2, delay: 1}}
            src = {gym} style={{width: "500px"}} className='cursor-pointer ' />

        </div>
    );
};

export default About;
