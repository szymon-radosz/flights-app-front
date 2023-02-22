import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';

import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import ButtonPrimary from './misc/ButtonPrimary';
import getScrollAnimation from '../utils/getScrollAnimation';

const Hero = ({
  listUser = [
    {
      name: 'Połączeń',
      number: '100000',
      icon: '/assets/airplane.png',
    },
    {
      name: 'Miast',
      number: '100',
      icon: '/assets/city.png',
    },
    {
      name: 'Krajów',
      number: '40',
      icon: '/assets/location-pin.png',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className='mx-auto mt-24 max-w-screen-xl px-8 xl:px-16' id='about'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col sm:grid-cols-2 sm:py-16 md:grid-rows-1'
          variants={scrollAnimation}
        >
          <div className=' row-start-2 flex flex-col items-start justify-center sm:row-start-1'>
            <h1 className='ld:leading-normal  max-w-none text-center text-3xl font-bold font-medium leading-tight text-black-600 sm:max-w-sm sm:text-left lg:text-3xl xl:text-4xl'>
              Znajdź kierunek na swoją kolejną podróż
            </h1>
            <p className='mt-4  mb-6 max-w-none text-center  text-black-500 sm:max-w-sm sm:text-left'>
              Nie przegap okazji i skorzystaj z naszych wyjątkowych promocji na
              bilety lotnicze.
            </p>
            <div className='flex w-full justify-center sm:block'>
              <Link href='/kierunki'>
                <ButtonPrimary>Pokaż dostępne kierunki</ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className='flex w-full'>
            <motion.div className='h-full w-full' variants={scrollAnimation}>
              <Image
                src='/assets/main.jpeg'
                alt='Image by pch.vector on Freepik'
                quality={100}
                width={612}
                height={383}
                layout='responsive'
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div id='feature'></div>
      <div className='relative flex w-full'>
        <ScrollAnimationWrapper className='z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg bg-white-500 py-9 sm:grid-flow-row sm:grid-cols-3 sm:divide-y-0 sm:divide-x-2'>
          {listUser.map((listUsers, index) => (
            <motion.div
              className='mx-auto flex w-full items-center justify-start py-4 px-4 sm:mx-0 sm:w-8/12 sm:w-auto sm:justify-center sm:py-6'
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className='mx-auto flex w-40 sm:w-auto'>
                <div className='bg-green-100 mr-6 flex h-12 w-12 items-center justify-center rounded-full'>
                  <img src={listUsers.icon} className='h-6 w-6' />
                </div>
                <div className='flex flex-col'>
                  <p className='text-xl font-bold text-black-600'>
                    {listUsers.number}+
                  </p>
                  <p className='text-lg text-black-500'>{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className='roudned-lg absolute top-0 left-0 right-0 mx-auto mt-8 h-64 w-11/12 bg-black-600 opacity-5 sm:h-48'
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
