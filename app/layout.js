import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caustic Monitoring Solutions',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-black text-white min-h-screen scroll-smooth'}>
        <Navbar />
        <main className="p-6 pt-20" id="home">{children}</main>
      </body>
    </html>
  )
}
