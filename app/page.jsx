import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Plans from '@/components/Plans'
import Splash from '@/components/Splash'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Splash />
      <Plans />
      <Footer />
    </main>
  )
}
