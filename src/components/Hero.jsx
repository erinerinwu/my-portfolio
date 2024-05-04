import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import erin from "./erin.jpg";

import { styles } from "../styles";

const Hero = () => {
  const fullText = " I'm a Math and Computer Science major at UCLA. I love building things!!! Whether it's crafting algorithms or developing web applications, I thrive on challenging myself and pushing the boundaries of what's possible. When I'm not coding, you might find me exploring the latest in AI, attending hackathons, or experimenting with new tech tools.";
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer;
    
    if (text === '') {  // Only start typing if text is empty
      setIsTyping(true);
      timer = setInterval(() => {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        if (index === fullText.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 20); // Adjust this value for faster or slower typing
    }

    return () => {
      clearInterval(timer);  // Clear the interval on component unmount
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-10`}>
        {/* Text container */}
        <div className="flex-1 min-w-0 overflow-visible">
        <br />
        <br />
        <br /><h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#f4f0fc]'>Hi there!</span>
            <br />
            <span className='text-[#f4f0fc]'>I'm </span>
            <span className='text-[#3d0785]'>Erin Wu</span>
          </h1>
          <br />
       
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="overflow-visible"
          >
            <p className="text-xl font-mono text-[#000000] mt-2">
              {text}
              <span className="typing-cursor">{isTyping ? '|' : ''}</span>
              <br className='sm:block hidden' />
            </p>
          </motion.div>
        </div>

        {/* Image container */}
        <div className="flex-1 ml-32">
          <img src= {erin} alt="Erin Wu" className="w-28 sm:w-64 md:w-96 rounded-3xl  " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
