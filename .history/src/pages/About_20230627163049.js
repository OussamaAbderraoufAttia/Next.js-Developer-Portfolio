import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';

const about = () => {
  return (
    <>
        <Head>
            <title>OA | About Page</title>
            <meta name='description' content='About Oussama Abderraouf ATTIA' />
        </Head>  
        <main className='flex w-full flex-col item-center justify-center'>
            <AnimatedText text='APassion Fuels Purpose!' />
        </main>
    </>
  )
}

export default about;
