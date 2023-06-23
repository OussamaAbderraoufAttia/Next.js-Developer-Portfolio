import '@/styles/globals.css'
//Importing the Inter font
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}