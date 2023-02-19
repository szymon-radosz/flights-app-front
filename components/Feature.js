import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useMemo } from 'react';

import getScrollAnimation from './../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const features = [];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className='mx-auto mt-8  max-w-screen-xl px-6 sm:mt-14 sm:px-8 lg:px-16'>
      <div className='p y-8 my-12 flex grid grid-flow-row grid-cols-1 items-center gap-8 sm:grid-flow-col sm:grid-cols-2'>
        <ScrollAnimationWrapper className='flex w-full justify-end'>
          <motion.div className='h-full w-full p-4' variants={scrollAnimation}>
            <Image
              src='/assets/main2.jpeg'
              alt='Image by pch.vector on Freepik'
              layout='responsive'
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className='ml-auto flex w-full flex-col items-end justify-center lg:w-9/12'
            variants={scrollAnimation}
          >
            <h3 className='text-center  text-3xl font-medium leading-tight text-black-600 sm:text-left lg:text-4xl lg:leading-relaxed'>
              Oszczędzaj na podróżach
            </h3>
            <p className='my-6 pl-2 text-center text-black-500 sm:text-left'>
              Oszczędzaj dzięki naszym atrakcyjnym promocjom na bilety lotnicze.
              Dzięki funkcji alertów cenowych będziesz na bieżąco informowany o
              najnowszych promocjach i ofertach specjalnych. <br></br>
              <br></br>Nasza strona internetowa to miejsce, gdzie znajdziesz
              najlepsze promocje na bilety lotnicze dla siebie i swojej rodziny.
              Możesz porównać ceny lotów z różnych linii lotniczych i wybrać
              najlepszą ofertę.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
