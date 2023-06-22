import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header';
import Footer from './components/footer'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'THE STUNNING IDEAS',
  description: 'Transform your space with our Miniature Memory Frames. These compact frames are perfect for showcasing your precious memories. Discover a variety of designs and personalize them to create a unique display. Shop now!',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
