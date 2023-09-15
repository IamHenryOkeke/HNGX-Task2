import Image from 'next/image'
import React from 'react'
import Twitter from "../assets/svg/Twitter.svg"
import Facebook  from "../assets/svg/Facebook.svg"
import Instagram from "../assets/svg/Instagram.svg"
import Youtube from "../assets/svg/Youtube.svg"


const Footer = () => {
  const date = new Date()
  return (
    <footer className='font-medium md:text-lg md:font-bold py-10 px-4 text-center flex flex-col gap-5 items-center'>
      <div className='flex gap-10'>
        <Image src={Facebook} width="20" height="20" alt='Facebook icon' />
        <Image src={Instagram} width="20" height="20" alt='Instagram icon' />
        <Image src={Twitter} width="20" height="20" alt='Twitter icon' />
        <Image src={Youtube} width="20" height="20" alt='Youtube icon' />
      </div>
      <div className='flex gap-10 text-[#111827]'>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
      </div>
      <p className='text-[#6B7280]'>© {date.getFullYear()} MovieBox by Okeke Nmesomachukwu Henry</p>
    </footer>
  )
}

export default Footer
