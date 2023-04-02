import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { selectAuth, setAuth } from '@/store/auth';

import handleAddFirebaseLog from './../../utils/handleAddFirebaseLog';
// Import react scroll
import ButtonOutline from '../misc/ButtonOutline.';

const Header = () => {
  const auth = useSelector(selectAuth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  // const analytics = getAnalytics();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const handleSetActiveLinkAbout = () => {
    setActiveLink('about');
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Home Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleSetActiveLinkFeature = () => {
    setActiveLink('feature');
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Benefits Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleSetActiveLinkBlog = () => {
    setActiveLink('blog');
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Blog Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleLogoClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Logo',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleDirectionsOptionClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Directions Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleAccountClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Account Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleLoginClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Header',
      name: 'Login Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleLogout = () => {
    dispatch(
      setAuth({
        token: '',
        email: '',
      })
    );
    router.push('/logowanie');
  };

  return (
    <>
      <header
        className={
          'fixed top-0 z-30  w-full bg-white-500 transition-all ' +
          (scrollActive ? ' pt-0 shadow-md' : ' pt-4')
        }
      >
        <nav className='mx-auto grid max-w-screen-xl grid-flow-col px-4 py-3 sm:px-8 sm:py-4 lg:px-16'>
          <div className='col-start-1 col-end-2 flex items-center'>
            <Link href='/' onClick={handleLogoClick}>
              <Image
                src='/assets/ostatniBiletLogoGreen.png'
                width={150}
                height={150}
                className='h-20 w-20 rounded-full'
                alt='Logo'
              />
            </Link>
          </div>
          <ul className='col-start-4 col-end-8 hidden items-center text-black-500  lg:flex'>
            <Link
              href='/#about'
              scroll={false}
              onClick={handleSetActiveLinkAbout}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'about'
                  ? ' animation-active text-green-500 '
                  : ' a text-black-500 hover:text-green-500')
              }
            >
              Strona Główna
            </Link>
            <Link
              href='/#feature'
              scroll={false}
              onClick={handleSetActiveLinkFeature}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'feature'
                  ? ' animation-active text-green-500 '
                  : ' text-black-500 hover:text-green-500 ')
              }
            >
              Korzyści
            </Link>
            <Link
              href='/#blog'
              scroll={false}
              onClick={handleSetActiveLinkBlog}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'blog'
                  ? ' animation-active text-green-500 '
                  : ' text-black-500 hover:text-green-500 ')
              }
            >
              Blog
            </Link>
          </ul>
          <div className='col-start-10 col-end-12 flex items-center justify-end font-medium'>
            {auth?.email ? (
              <>
                <Link href='/konto' onClick={handleAccountClick}>
                  <p className='mr-3 text-black-100'>Moje konto</p>
                </Link>
                <Link href='#' onClick={handleLogout}>
                  <Image
                    src='/assets/logout.png'
                    width={20}
                    height={20}
                    className='mr-2'
                    alt='Logout'
                  />
                </Link>
              </>
            ) : (
              <Link href='/logowanie' onClick={handleLoginClick}>
                <p className='mr-3 text-black-100'>Logowanie</p>
              </Link>
            )}

            <Link href='/kierunki' onClick={handleDirectionsOptionClick}>
              <ButtonOutline>Kierunki</ButtonOutline>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
