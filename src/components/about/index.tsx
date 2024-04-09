import profile from '@/assets/hinh.jpg'
import { SelectedPage } from '@/shared/enums'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function About({ setSelectedPage }: Props) {
  return (
    <motion.section id='about' className='pb-10 pt-16 sm:pt-20 h-[100vh]'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className='relative mx-auto mb-6 max-w-[90vw] overflow-hidden rounded-xl bg-black/40 py-16 mt-10'
      >
        <div className='mx-auto px-7'>
          <div>
            <h2 className='gray-primary-color text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              Hello, I am{' '}
              <span className='italic'>
                <TypeAnimation
                  sequence={['Vuong Le', 200, 'a full stack developer', 200]}
                  wrapper='span'
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p className='mt-3 text-xl leading-relaxed text-gray-400 md:mt-6'>
              Started working with Spring and Java web development, then moving to one of the cutting-edge development
              trends(nodejs, angular, react and hybrid). I specialize in the full stack of MongoDB, IBM Loopback, Nodejs
              with Typescript, Angular, Ionic, React/React Native and Flutter frameworks. I also have good experience
              with AWS, Jenkins, Jira, ...
            </p>
            <h3 className='gray-primary-color mt-6 text-3xl font-bold leading-tight'>Achievement</h3>
            <p className='max-w-lg pt-2 text-xl leading-relaxed text-gray-400'>
              <p className='block'>Project Manager Of The Year Award in 2022</p>
              <p className='block'>Project Leader Of The Year Award in 2016 and 2017</p>
            </p>
            <h3 className='gray-primary-color mt-6 text-3xl font-bold leading-tight'>Attended Courses</h3>
            <p className='mt-2 text-xl leading-relaxed text-gray-400'>
              <p className='block'> Agile Project Management in 2023</p>
              <p className='block'> Architecting on AWS in 2022</p>
              <p className='block'> Training Course on Project Management Body of Knowledge in 2016</p>
            </p>
          </div>
          <img
            src={profile}
            alt=''
            className='bottom-[-10%] right-[6%] mx-auto mt-8 flex h-auto w-[240px] rounded-full md:absolute md:w-[400px]'
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
