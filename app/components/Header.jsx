
import Navbar from "./HeaderComponents/Navbar"
import Hero from "./HeaderComponents/Hero"


export default function Header() {
  return (
    <div className="px-4 pt-2 md:px-24 md:py-16 bg-[url('/HeroImage.png')] bg-center bg-no-repeat bg-cover min-h-[600px] text-white">
        <Navbar/>
        <Hero/>
    </div>
  )
}