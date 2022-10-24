import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../assets/constants'
import logo from '../assets/logo.png'
import { HiOutlineMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

const NavLinks = ({ onClick }) => (
  <ul className='mt-8'>
    {links.map(link => (
      <li key={link.name} className='my-8 text-sm font-medium '>
        <NavLink
          to={link.to}
          end={link.to === '/'}
          className='flex justify-start items-center hover:text-cyan-400 text-gray-300 text-transition '
          onClick={onClick}
        >
          <link.icon className='w-6 h-6 mr-2' />
          <span>{link.name}</span>
        </NavLink>
      </li>
    ))}
  </ul>
)

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const mobileMenuHandler = () => setMobileMenu(prev => !prev)

  return (
    <>
      <div
        className='md:hidden absolute right-5 top-[17px]  text-white cursor-pointer z-10'
        onClick={mobileMenuHandler}
      >
        {mobileMenu ? <RiCloseLine size={36} /> : <HiOutlineMenu size={36} />}
      </div>

      <nav className=' bg-[#1A2A33] w-60 md:flex hidden flex-col py-10 px-6'>
        <img src={logo} alt='logo' className='object-contain w-full h-24' />
        <NavLinks />
      </nav>

      <nav
        className={`md:hidden flex flex-col bg-gradient-to-tl from-white/10 to-cyan-600 backdrop-blur-lg absolute top-0 h-screen w-2/3 z-20 p-6 smooth-transition ${
          mobileMenu ? 'left-0' : '-left-full'
        } `}
      >
        <img src={logo} alt='logo' className='object-contain w-full h-24' />
        <NavLinks onClick={() => setMobileMenu(false)} />
      </nav>
    </>
  )
}

export default Sidebar
