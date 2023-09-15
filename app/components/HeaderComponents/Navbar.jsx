"use client"

import { useState } from "react";
import Menu from "../../assets/svg/Menu.svg";
import Search from "../../assets/svg/Search.svg"
import Image from "next/image";
import TV from "../../assets/svg/tv.svg"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [value, setValue] = useState("")

  const handleOnSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <nav className="mb-6">
      <div className='flex justify-between items-center'>
        <a href="/" className='flex gap-2 items-center md:text-2xl font-bold lg:w-1/4'>
          <Image src={TV} width={30} height={30} alt="close menu"/>
          <span>MovieBox</span>
        </a>
        <div className="hidden md:block">
          <form onSubmit={handleOnSubmit} className="relative">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} name="" id="" className="bg-transparent h-8 w-[525px] p-5 rounded-md border-2 focus:outline-none" placeholder="What do you want to watch?" />
            <button className="absolute top-[14px] right-5">
              <Image src={Search} width={15} height={15} alt="search"/>
            </button>
          </form>
          
        </div>
        <div onClick={() => setNavbar(!navbar)} className='flex items-center gap-3 lg:gap-10'>
          <p className="font-bold">Sign in</p>
          <Image
            className="cursor-pointer"
            src={Menu}
            width={30}
            height={30}
            alt="toggle menu button"
          />
        </div>
      </div>
      {/* <div
        className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 bg-slate-200 mt-3 rounded-xl`}
      >
          
      </div> */}
    </nav>
  )
}

export default Navbar

