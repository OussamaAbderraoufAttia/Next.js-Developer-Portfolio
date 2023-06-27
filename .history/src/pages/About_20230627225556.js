import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import me from '../../public/images/profile/me.jpg';
import Image from 'next/image';

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
                    <div className='col-span-3 flex flex-col items-start justify-start px-4 py-6'>
                        <h2 className='mb-4  text- font-bold uppercase text-dark/75'>
                            Biography
                        </h2>
                        <div  style={{fontSize: 12}}>
                        <p className='font-medium '>
                            -Hi, I'm Oussama Abderraouf ATTIA, a student in the Higher National School of Computer Science Algiers, Algeria, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life. In addition to my expertise in web development and design, I have a strong interest in machine learning engineering and working with data.
                        </p>
                        <br/>
                       <p className='font-medium '>
                            -One aspect that truly excites me is the opportunity to work with data, extracting meaningful features, and making machines intelligent, akin to the human brain. I believe that by harnessing the power of data and employing sophisticated algorithms, we can unlock new possibilities and create remarkable experiences for users.
                       </p>
                       <br/>
                       <p className='font-medium '>
                            -Design, for me, goes beyond aesthetics; it's about solving problems and crafting intuitive, enjoyable interactions. Whether I'm developing a website, designing a mobile app, or working on any other digital product, I always strive for design excellence and put the user at the center of my thinking.
                       </p>
                       <br/>
                       <p className='font-medium '>
                            -I am thrilled at the prospect of applying my skills, passion, and experience to your next project, and I am confident that together we can create something truly exceptional.
                       </p>
                        </div>
                        
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6'>
                        <Image src={me} alt='Oussama Abderraouf ATTIA' width={330} height={320} className='rounded-2xl' /> 
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default about;
