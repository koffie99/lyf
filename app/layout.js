import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ['latin']
})

export const metadata = {
  title: 'Lyf | Home',
  description: 'Get a life insurance today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
