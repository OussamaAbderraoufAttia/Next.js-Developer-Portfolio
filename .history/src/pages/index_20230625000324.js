import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import developerPic from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Oussama Abderraouf ATTIA</title>
        <meta name="description" content="Oussama Abderraouf ATTIA, 2CP student at ESI Algiers" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex  items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={developerPic} alt="Oussama Abderraouf ATTIA" className="w-full h-auto" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center '>
              <AnimatedText text="Turning Vision Into Reality With Code And AI." className='!text-5xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web/mobile development and my journey in learning AI and Data Science.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/dummy.pdf' target='_blank'
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark border border-solid border-transparent hover:border-dark'
                > Resumé </Link>
                <Link href="mailto: lo_attia@esi.dz"  target='_blank'>Contact me</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
