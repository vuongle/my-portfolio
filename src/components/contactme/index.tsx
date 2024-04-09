import { useForm } from 'react-hook-form'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { SelectedPage } from '@/shared/enums'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function ContactMe({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <motion.section id='contactme' className='pt-16 pb-10 sm:pt-20 h-[100vh] '>
      <motion.div className='mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl mt-10'>
        <div>
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
            className='mb-6 max-w-3xl text-center sm:text-center md:mx-auto'
          >
            <h2 className='mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl'>Let's connect</h2>
            <p className='mx-automax-w-3xl text-xl text-gray-600 dark:text-slate-400'>
              and start working on amazing things
            </p>
          </motion.div>
        </div>

        <div className='flex sm:justify-start md:justify-center'>
          <div className='grid sm:grid-cols-2'>
            {/* contact info on the left*/}
            <div className='my-auto pr-6'>
              <ul className='sm:grid-cols-2'>
                <li className='flex'>
                  <AiFillLinkedin className='w-[70px] h-auto text-gray-300' />
                  <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>My LinkedIn</h3>
                    <a href='https://www.linkedin.com/in/vuong-le/' target='_blank' className='text-gray-400'>
                      Connect me
                    </a>
                  </div>
                </li>
                <li className='flex'>
                  <AiFillGithub className='w-[70px] h-auto text-gray-300' />
                  <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>My Github</h3>
                    <a href='https://github.com/vuongle' target='_blank' className='text-gray-400'>
                      Click to view my work
                    </a>
                  </div>
                </li>
                <li className='flex'>
                  <AiFillPhone className='w-[70px] h-auto text-gray-300' />
                  <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>My Phone</h3>
                    <p className='text-gray-400'>(+84) 0979.454.238</p>
                  </div>
                </li>
                <li className='flex'>
                  <AiFillMail className='w-[70px] h-auto text-gray-300' />
                  <div className='m-5'>
                    <h3 className='text-lg font-bold text-gray-200'>My Email</h3>
                    <a href='mailto:vuonglg@gmail.com' className='text-gray-400'>
                      vuonglg@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* form on the right*/}
            <div id='form' className='max-w-6xl p-5'>
              <h2 className='mb-4 text-2xl font-bold text-gray-300'>Ready to Get Started?</h2>
              <form
                target='_blank'
                onSubmit={onSubmit}
                method='POST'
                action='https://formsubmit.co/51a5b0a6907591ae22b02ca9e54b85ad'
              >
                <div className='mb-6'>
                  <div className='mx-0 mb-1 sm:mb-4'>
                    <div className='mx-0 mb-1 sm:mb-4'>
                      <input
                        className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0 focus:outline-none'
                        type='text'
                        placeholder='Your name'
                        {...register('name', {
                          required: true
                        })}
                      />
                      {
                        // display errors of the name field
                        errors.name && (
                          <p className='mt-1 text-red-500'>{errors.name.type === 'required' && 'NAME is required'}</p>
                        )
                      }
                    </div>
                    <div className='mx-0 mb-1 sm:mb-4'>
                      <input
                        className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0  focus:outline-none'
                        type='email'
                        placeholder='Your email'
                        {...register('email', {
                          required: true
                        })}
                      />
                      {
                        // display errors of the name field
                        errors.email && (
                          <p className='mt-1 text-red-500'>{errors.email.type === 'required' && 'EMAIL is required'}</p>
                        )
                      }
                    </div>
                  </div>
                  <div className='mx-0 mb-1 sm:mb-4'>
                    <textarea
                      className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 sm:mb-0 focus:outline-none'
                      cols={30}
                      rows={5}
                      placeholder='Write your message'
                      {...register('message', {
                        required: true
                      })}
                    ></textarea>
                    {
                      // display errors of the name field
                      errors.message && (
                        <p className='mt-1 text-red-500'>
                          {errors.message.type === 'required' && 'MESSAGE is required'}
                        </p>
                      )
                    }
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='w-full bg-primary-color text-white px-6 py-3 font-xl rounded-md sm:mb-0'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
