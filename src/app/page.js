import Link from 'next/link'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopPanel from './components/toppanel'

export default function Home() {
  return (
    <>
    <TopPanel/>
    <Navbar/>
    Welcome!!
    <Footer/>
    </>
  )
}
