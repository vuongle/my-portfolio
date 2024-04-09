import { SelectedPage } from '@/shared/enums'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

export default function Navbar({ selectedPage, setSelectedPage }: Props) {
  const [nav, setNav] = useState<boolean>(false)
  const currentPage = selectedPage.toString()

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='fixed top-0 z-30 mx-auto w-full px-4 sm:px-6 lg:px-8'>
      <div className='flex h-16 items-center justify-between rounded-b-3xl bg-[#223]/50 px-4 shadow-lg lg:h-20'>
        {/* Name on the left */}
        <div className='text-xl text-white sm:text-2xl'>
          <a href='#' className='font-bold'>
            <span>Vuong Le</span>
          </a>
        </div>

        {/* Links */}
        <ul className='hidden text-2xl font-medium text-gray-500 lg:flex lg:items-center lg:justify-center lg:space-x-10'>
          <li className='p-2'>
            <AnchorLink
              href={`#home`}
              className={`${currentPage === 'home' ? 'text-white' : ''} transition duration-700 hover:text-gray-300`}
              onClick={() => {
                setSelectedPage(SelectedPage.Home)
              }}
            >
              Home
            </AnchorLink>
          </li>
          <li className='p-2'>
            <AnchorLink
              href={`#about`}
              className={`${currentPage === 'about' ? 'text-white' : ''} transition duration-700 hover:text-gray-300`}
              onClick={() => {
                setSelectedPage(SelectedPage.About)
              }}
            >
              About
            </AnchorLink>
          </li>
          <li className='p-2'>
            <AnchorLink
              href={`#portfolio`}
              className={`${currentPage === 'portfolio' ? 'text-white' : ''} transition duration-700 hover:text-gray-300`}
              onClick={() => {
                setSelectedPage(SelectedPage.Portfolio)
              }}
            >
              Portfolio
            </AnchorLink>
          </li>
          <li className='p-2'>
            <AnchorLink
              href={`#contactme`}
              className={`${currentPage === 'contactme' ? 'text-white' : ''} transition duration-700 hover:text-gray-300`}
              onClick={() => {
                setSelectedPage(SelectedPage.ContactMe)
              }}
            >
              Contact Me
            </AnchorLink>
          </li>
        </ul>

        {/* Menu or Close icon on the right in small screen. this is not shown in medium screen and above(md:hidden) */}
        <div className='z-40 block text-white lg:hidden' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* navbar in mobile mode */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 z-30 h-[50%] w-full bg-[#202121] text-gray-300 duration-500 ease-in-out'
              : 'fixed left-[-100%]'
          }
        >
          <h1 className='gray-primary-color m-4 text-3xl'>V. LE</h1>
          <ul className='ml-20 p-8 text-4xl'>
            <li className='p-2'>
              <AnchorLink href={`#home`} onClick={handleNav}>
                Home
              </AnchorLink>
            </li>
            <li className='p-2'>
              <AnchorLink href={`#about`} onClick={handleNav}>
                About
              </AnchorLink>
            </li>
            <li className='p-2'>
              <AnchorLink href={`#portfolio`} onClick={handleNav}>
                Portfolio
              </AnchorLink>
            </li>
            <li className='p-2'>
              <AnchorLink href={`#contactme`} onClick={handleNav}>
                Contact Me
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
