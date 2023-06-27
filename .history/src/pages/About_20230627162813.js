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
        <main>
            <AnimatedText text='APassion Fuels Purpose!' />
        </main>
    </>
  )
}

export default about;
