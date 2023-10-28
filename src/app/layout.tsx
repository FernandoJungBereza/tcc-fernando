import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MenuNavbar from '@/components/patterns/Navbar/navbar'
import Footer from '@/components/patterns/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='z-40 flex'>
          <MenuNavbar />
          <div className='w-full bg-black pt-[60px] text-white'>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
