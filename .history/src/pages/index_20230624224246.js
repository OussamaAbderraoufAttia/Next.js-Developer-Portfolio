import Head from 'next/head'
import Layout from '../components/Layout';





export default function Home() {
  return (
    <>
      <Head>
        <title>Oussama Abderraouf ATTIA</title>
        <meta name="description" content="Oussama Abderraouf ATTIA, 2CP student at ESI Algiers" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <h1>Hello, I'm Oussama</h1>
        </Layout>
      </main>
    </>
  )
}
