import './globals.css'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import LoadingBar from './components/LoadingBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  verification: {
    google: '5FXgW7DvTvu1f0axTo26se4t8XJmrWAHk_c3ioEbQZs',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <LoadingBar />
        </Suspense>
      </body>
    </html>
  )
}
