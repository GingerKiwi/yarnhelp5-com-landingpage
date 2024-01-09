import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yarn Help!',
  description: 'A collection of connected apps to help with knitting and crochet.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className='bg-cream'>{children}</body>
    </html>
  )
}
