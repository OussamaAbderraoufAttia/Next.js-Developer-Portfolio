import React from 'react';
import { motion } from 'framer-motion';

const quote = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
        }
    } 
}
const singleWord  = {
    initial:{
        opacity:0,
        y: 50,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
        }
    } 
}
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 className={`inline-block text-dark font-bold capitalize text-8xl ${className}`}
      variants={quote}
      inherit='initial'
      animate='animate'
      >
        {text.split(" ").map((word, index) => 
          <span key={word + '-' + index} className='inline-block '>
            {word}&nbsp;
          </span>
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
