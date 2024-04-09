import proj1 from '@/assets/proj1.png'
import { SelectedPage } from '@/shared/enums'
import { AiFillChrome, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function Portfolio({ setSelectedPage }: Props) {
  return (
    <motion.section id='portfolio' className='pt-16 pb-10 sm:pt-20 h-[100vh]'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Portfolio)}
        className=' mx-auto max-w-[90vw] grid lg:grid-cols-2 gap-6 mt-10'
      >
        {/* project 1 section*/}
        <div className='mb-4 flex flex-col md:grid md:grid-cols-8 rounded-lg bg-black/40 overflow-hidden shadow-xl z-1 md:pr-5'>
          <a href='#' className='group h-48 col-span-3 md:h-auto lg:h-auto'>
            <img
              src={proj1}
              alt=''
              className='h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 rounded-lg'
            />
          </a>

          <div className='flex flex-col col-span-5 p-4 mx-auto my-auto'>
            <div className='flex flex-col'>
              <h2 className='text-gray-200 font-bold text-xl leading-10'>Landing Page</h2>
              <p className='text-gray-400'>
                A responsive landing page developed with React Typescript, Tailwind, Framer motion for animation and
                formsubmit.io to handle the contact form. This is not a real application, it is just developed for
                learning purpose only.
              </p>
              <p className='text-gray-400'>
                This application is deployed to Cloudfare service. Click the chrome icon to view the running
                application. Click the github icon to view the source and feel free to check it out.
              </p>
            </div>
            <div className='flex flex-row  text-white gap-4 '>
              <a className='cursor-pointer' href='https://github.com/vuongle/gym-react-ts' target='_blank'>
                <AiFillGithub className='w-[55px] h-auto' />
              </a>

              <a className='cursor-pointer' href='https://gym-react-ts-6qb.pages.dev/' target='_blank'>
                <AiFillChrome className='w-[55px] h-auto'></AiFillChrome>
              </a>
            </div>
          </div>
        </div>

        {/* project 2 section*/}

        {/* project 3 section*/}
      </motion.div>
    </motion.section>
  )
}
