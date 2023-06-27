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
                <h1 className="text-center" style={{
                    fontSize: '65px',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                }}>
                    Passion Fuels Purpose!
                </h1>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start '>
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
