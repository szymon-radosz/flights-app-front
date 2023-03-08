import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Import react scroll
import ButtonOutline from '../misc/ButtonOutline.';
import analytics from '../../firebase';

const Header = () => {
  const { asPath } = useRouter();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const handleSetActiveLinkAbout = () => {
    setActiveLink('about');
    analytics?.logEvent('click_element', {
      location: 'Header',
      name: 'Home Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleSetActiveLinkFeature = () => {
    setActiveLink('feature');
    analytics?.logEvent('click_element', {
      location: 'Header',
      name: 'Benefits Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleSetActiveLinkBlog = () => {
    setActiveLink('blog');
    analytics?.logEvent('click_element', {
      location: 'Header',
      name: 'Blog Option',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleLogoClick = () => {
    analytics?.logEvent('click_element', {
      location: 'Header',
      name: 'Logo',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleDirectionsOptionClick = () => {
    analytics?.logEvent('click_element', {
      location: 'Header',
      name: 'Directions Option',
      activeUrl: window?.location?.pathname,
    });
  };

  return (
    <>
      <header
        className={
          'fixed top-0 z-30  w-full bg-white-500 transition-all ' +
          (scrollActive ? ' pt-0 shadow-md' : ' pt-4')
        }
      >
        <nav className='mx-auto grid max-w-screen-xl grid-flow-col px-6 py-3 sm:px-8 sm:py-4 lg:px-16'>
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
