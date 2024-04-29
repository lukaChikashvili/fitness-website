import React, { useEffect } from 'react'
import gsap from 'gsap';
import SplitType from 'split-type';


const Header = () => {
  useEffect(() => {
        
    let typeSplit = new SplitType('[animate]', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.from('[animate] .char', {
        y: '100%',
        opacity: 1,
        rotationZ: '10',
        duration: 0.45,
        ease: 'power1.out',
        stagger: 0.1,
    });
}, []);


  return (
    <div className='w-full flex items-center justify-between px-24 py-8 '>
       <div className="logo wavy-text ">
         <h1 animate = "animate " className='text-3xl'>Flexify</h1>
       </div>

       <nav className='flex items-center gap-8 list-none text-xl wavy-text'>
         <li><a href = "#" animate = "animate " className='text-xl'>Home</a></li>
          <li><a href = "#" animate = "animate " className='text-xl'>About</a></li>
          <li><a href = "#" animate = "animate " className='text-xl'>Trainers</a></li>
          <li><a href = "#" animate = "animate " className='text-xl'>More</a></li>
       </nav>
    </div>
  )
}

export default Header
