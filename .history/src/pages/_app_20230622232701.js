import '@/styles/globals.css'
// Importing the Inter font
import { Montserrat } from 'next/font'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('${montserrat.href}');
        :root {
          --font-mont: '${montserrat.fontFamily}';
        }
      `}</style>
      <main className="font-mont">
        <Component {...pageProps} />
      </main>
    </>
  )
}
