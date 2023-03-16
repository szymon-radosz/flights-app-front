import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../../components/Layout/Layout';
import SeoHead from '../../../components/SeoHead';
export default function Forgot() {
  return (
    <>
      <SeoHead title='Przypomnienie hasła | ostatnibilet.pl' />
      <Layout>
        <div className='mx-auto mt-28 max-w-screen-xl py-12 px-0 pt-5 sm:px-6 xl:px-16'>
          <section className='gradient-form bg-neutral-200 dark:bg-neutral-700 h-full'>
            <div className='container h-full py-5 px-4 sm:px-10 sm:py-10'>
              <div className='g-6 text-neutral-800 dark:text-neutral-200 flex h-full flex-wrap items-center justify-center'>
                <div className='w-full'>
                  <div className='bg-white dark:bg-neutral-800 block rounded-lg shadow-lg'>
                    <div className='g-0 lg:flex lg:flex-wrap'>
                      <div className='px-4 md:px-0 lg:w-6/12'>
                        <div className='md:mx-6 md:p-12'>
                          <div className='text-center'>
                            {/* <img
                              className='mx-auto w-48'
                              src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
                              alt='logo'
                            /> */}
                            {/* <h4 className='mt-1 mb-12 pb-1 text-xl font-semibold'>
                              We are The Lotus Team
                            </h4> */}
                          </div>
                          <form>
                            <p className='mb-6 pt-5 text-center text-2xl font-bold sm:pt-0'>
                              Przypomnienie hasła
                            </p>

                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
                              <input
                                type='text'
                                className='dark:placeholder:text-neutral-200 peer block min-h-[auto] w-full rounded border border-gray-100 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                                id='exampleFormControlInput1'
                                placeholder='Username'
                              />
                              <label
                                htmlFor='exampleFormControlInput1'
                                className='peer-focus:text-blue-600 dark:text-neutral-200 dark:peer-focus:text-neutral-200 pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black-100 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:bg-white-500 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none'
                              >
                                Email
                              </label>
                            </div>

                            <div className='mb-12 pt-1 pb-1 text-center'>
                              <button
                                className='mb-3 inline-block w-full rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white-500 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]'
                                type='button'
                                data-te-ripple-init
                                data-te-ripple-color='light'
                                // style={{
                                //   background:
                                //     'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                // }}
                              >
                                Wyślij przypomnienie
                              </button>
                              {/* <a href='#!'>Przypomnienie hasła</a> */}
                            </div>
                            <div className='flex items-center justify-between pb-6'>
                              <p className='mb-0 mr-2'>Nie masz konta?</p>
                              <Link href='/rejestracja'>
                                <button
                                  type='button'
                                  className='text-danger hover:border-danger-600 hover:bg-neutral-500 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 inline-block rounded border-2 border-green-500 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:hover:bg-opacity-10'
                                  data-te-ripple-init
                                  data-te-ripple-color='light'
                                >
                                  Rejestracja
                                </button>
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className='flex hidden items-center rounded-b-lg lg:block lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none'>
                        <Image
                          src='/assets/forgot.png'
                          alt='Login'
                          width={500}
                          height={600}
                          quality={100}
                          className='w-full lg:rounded-r-lg lg:rounded-bl-none'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}