// import { motion } from 'framer-motion';
// import getScrollAnimation from '../utils/getScrollAnimation';
// import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper';
import Image from 'next/image';
import Link from 'next/link';

import ButtonPrimary from './../../../components/misc/ButtonPrimary';
import Layout from '../../../components/Layout/Layout';
import SeoHead from '../../../components/SeoHead';
export default function Directions() {
  return (
    <>
      <SeoHead title='404 | Nie znaleziono strony' />
      <Layout>
        <div className='mx-auto mt-20 max-w-screen-xl px-6 pt-20 xl:px-16'>
          <div className='lg:align-center block sm:pt-10v sm:pb-10v md:pt-10v md:pb-10v lg:flex lg:justify-center'>
            <Image
              src='/assets/404.png'
              alt='404'
              // layout='responsive'
              width={500}
              height={300}
              quality={100}
              className='mb-10 sm:mx-auto sm:max-w-xs   lg:block lg:max-w-lg lg:flex-1'
            />
            <div className='lg:align-center lg:ml-10 lg:flex lg:flex-1 lg:flex-col lg:justify-center'>
              <h1 className='mb-2 text-center text-2xl font-bold'>
                Nie znaleziono strony
              </h1>
              <p className='mb-4 text-center font-light sm:mx-auto sm:max-w-sm '>
                Tam niestety nie możemy Ciebie zabrać, ale może uda Ci się coś
                znaleźć w zakładce z wyszukiwarką.
              </p>
              <div className='mb-20 flex w-full justify-center'>
                <Link href='/kierunki'>
                  <ButtonPrimary addClass=''>
                    Pokaż dostępne kierunki
                  </ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
