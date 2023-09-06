import './globals.css'
import { Inter } from 'next/font/google'
// import ProgressBar from '@badrap/bar-of-progress'
// import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
// const progress = new ProgressBar({
//   size:4,
//   color: "#FE595E",
//   className: "z-50",
//   delay: 100
// })

// const Router = useRouter()



// Router.events.on("routeChangeStart", progress.start)
// Router.events.on("routeChangeComplete", progress.finish)
// Router.events.on("routeChangeError", progress.finish)

export const metadata = {
  title: 'Airbnb',
  
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
