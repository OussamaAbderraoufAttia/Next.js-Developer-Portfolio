import React from 'react'

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden '>
      <h1 className={`inline-block text-dark font-bold capitalize text-8xl ${className}`}>
        {text.split("").map((char, index) => {}                  
      </h1>
    </div>
  )
}

export default AnimatedText