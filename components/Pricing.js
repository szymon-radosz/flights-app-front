import React, { useMemo } from 'react';
import Image from 'next/image';
import Testimoni from './Testimoni';
import ButtonPrimary from './misc/ButtonPrimary';
import ButtonOutline from './misc/ButtonOutline.';
import Maps from '../public/assets/HugeGlobal.svg';
import { motion } from 'framer-motion';
import getScrollAnimation from '../utils/getScrollAnimation';
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className='w-full bg-gradient-to-b from-white-300 to-white-500 py-14'
      id='pricing'
    >
      <div className='mx-auto  flex w-full max-w-screen-xl flex-col justify-center px-6 text-center sm:px-8 lg:px-16'>
        <div className='my-16 flex w-full flex-col' id='testimoni'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='sm: mx-auto w-9/12 text-2xl font-medium leading-normal text-black-600 sm:text-3xl lg:w-4/12 lg:text-4xl'
            >
              Trusted by Thousands of Happy Customer{' '}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='mx-auto mb-2 mt-4 w-10/12 leading-normal sm:w-7/12 lg:w-6/12'
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className='flex w-full flex-col py-12'>
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className='relative mt-16 w-full'>
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className='absolute z-10  flex w-full flex-col items-center justify-between rounded-xl bg-white-500 py-8 px-6 sm:flex-row sm:py-14 sm:px-12 lg:px-16'>
                <div className='mb-6 flex w-10/12 flex-col text-left sm:mb-0 sm:w-7/12 lg:w-5/12'>
                  <h5 className='text-xl font-medium leading-relaxed text-black-600 sm:text-2xl lg:text-3xl'>
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className='roudned-lg absolute top-0 left-0 right-0 mx-auto mt-8 h-60 w-11/12 bg-black-600 opacity-5 sm:h-56'
                style={{ filter: 'blur(114px)' }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
