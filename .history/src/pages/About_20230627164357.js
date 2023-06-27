import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';

const about = () => {
  return (
    <>
        <Head>
            <title>OA | About Page</title>
            <meta name='description' content='About Oussama Abderraouf ATTIA' />
        </Head>  
        <main className='flex w-full flex-col item-center justify-center'>
            <Layout className='pt-16'>
                <h1 style={{
                    fontSize: '16px',
                }}>
                    Passion Fuels Purpose!
                </h1>
                <AnimatedText text='Passion Fuels Purpose!' />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div>
                        <h2 className='mb-4 text- font-bold uppercase text-dark/75'>
                            Biography
                        </h2>
                    </div>

                </div>
            </Layout>
        </main>
    </>
  )
}

export default about;
