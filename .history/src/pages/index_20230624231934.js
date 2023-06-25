import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import developerPic from '../../public/images/profile/developer-pic-1.png';

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
            <div className=''>
              <Image src={developerPic} alt="Oussama Abderraouf ATTIA" className="w-full h-auto" />
            </div>
            <div>
              <h1>
              Turning Vision Into Reality With Code And AI. 
              </h1>
              <p>

              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
