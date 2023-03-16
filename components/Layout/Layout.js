import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectAlertState } from '@/store/alertSlice';
import { selectloaderState } from '@/store/loaderSlice';

import Alert from './../../components/Alert';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const loader = useSelector(selectloaderState);
  const alert = useSelector(selectAlertState);

  return (
    <>
      <Header />
      {alert?.show && alert?.msg && (
        <Alert msg={alert?.msg} type={alert?.type} />
      )}
      {loader && (
        <div className='absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.5)]'>
          <Image
            src='/assets/loader.gif'
            width={150}
            height={150}
            className='max-h-[70px]'
            alt='Loader'
          />
        </div>
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
