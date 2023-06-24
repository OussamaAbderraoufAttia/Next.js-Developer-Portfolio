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
          <div className="flex flex-col items-center justify-between w-full">
            <div>
              <Image src={developerPic} alt="Oussama Abderraouf ATTIA" className="w-full h-auto" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
