import profile from '@/assets/effect.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/enums'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Hero({ setSelectedPage }: Props) {
  return (
    <motion.section id='home' className='relative h-[100vh] overflow-hidden pb-10 pt-16 sm:pt-20'>
      {/*text, 2 buttons , 2 icons*/}
      <motion.div className='relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20'>
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          className='mx-auto max-w-2xl text-center'
        >
          <h1 className='gray-primary-color text-4xl font-bold sm:text-6xl'>
            I will resolve your software development
          </h1>

          <p className='mt-5 text-base text-white sm:text-xl'>
            Do you need a full stack engineer? Don't hesitate to contact me.
          </p>

          <div>
            <a
              href='./CV.pdf'
              target='_blank'
              title=''
              role='button'
              className='bg-primary-color mr-4 mt-8 inline-flex items-center rounded-lg px-6 py-4 font-semibold text-white shadow-2xl transition-all duration-200 hover:scale-110'
            >
              Download CV
            </a>
            <AnchorLink
              href='#portfolio'
              title=''
              role='button'
              className='mt-8 inline-flex items-center rounded-lg border px-6 py-4 font-semibold text-white transition-all duration-200 hover:scale-110'
            >
              View Work
            </AnchorLink>
          </div>

          <div className='mx-auto flex max-w-[500px] flex-row justify-center p-8 text-white'>
            <a
              className='cursor-pointer transition-all duration-200 hover:scale-110'
              href='https://www.linkedin.com/in/vuong-le/'
              target='_blank'
            >
              <AiFillLinkedin className='h-auto w-[70px]' />
            </a>
            <a
              className='cursor-pointer transition-all duration-200 hover:scale-110'
              href='https://github.com/vuongle'
              target='_blank'
            >
              <AiFillGithub className='h-auto w-[70px]' />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/*3 images at the bottom*/}
      <div className='relative bottom-0 z-10 mx-auto flex justify-center'>
        <img
          className='absolute bottom-[-256px] right-0 block h-auto w-[800px] sm:bottom-[-256px] sm:w-[900px] '
          src={profile}
          alt=''
        />
      </div>
    </motion.section>
  )
}
