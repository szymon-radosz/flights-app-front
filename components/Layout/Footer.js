import Image from 'next/image';
import React from 'react';

import Facebook from '../../public/assets/Icon/facebook.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';
const Footer = () => {
  return (
    <div className='bg-white-300 pt-6 pb-6 lg:pt-12 lg:pb-12 '>
      <div className='mx-auto mb-5 w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-6 sm:mb-0 sm:grid-flow-col sm:grid-cols-12 sm:grid-rows-1 sm:px-8 lg:px-16'>
        <div className=' flex items-center justify-center sm:justify-start '>
          <div className='flex w-full items-center justify-center sm:w-auto'>
            <Image
              src='/assets/ostatniBiletLogoGreen.png'
              width={150}
              height={150}
              className='h-20 w-20 rounded-full'
              alt='Logo'
            />
            <p className='mb-4 mt-6 ml-3 font-bold'>
              Znajdź kierunek na <br></br>swoją kolejną podróż
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center sm:block'>
        <div className='mx-auto w-auto max-w-screen-xl items-end justify-between px-8 sm:flex sm:w-full sm:px-10 lg:px-16'>
          <p className='mb-3 text-gray-400 sm:mb-0'>
            © {new Date().getFullYear()} - ostatnibilet.pl
          </p>
          <div className='flex justify-center sm:justify-end'>
            <div className='mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md'>
              <a
                href='https://facebook.com/profile.php?id=100089324611469'
                target='_blank'
                title='Facebook'
                rel='noopener noreferrer'
              >
                <Facebook className='h-6 w-6' />
              </a>
            </div>
            <div className='mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md'>
              <a
                href='https://instagram.com/ostatnibilet.pl'
                target='_blank'
                title='Instagram'
                rel='noopener noreferrer'
              >
                <Instagram className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
