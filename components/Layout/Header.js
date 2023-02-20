import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// Import react scroll
import { Link as LinkScroll } from 'react-scroll';

import ButtonOutline from '../misc/ButtonOutline.';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
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
            <Link href='/'>
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
            <LinkScroll
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about');
              }}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'about'
                  ? ' animation-active text-green-500 '
                  : ' a text-black-500 hover:text-green-500')
              }
            >
              Strona Główna
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='feature'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('feature');
              }}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'feature'
                  ? ' animation-active text-green-500 '
                  : ' text-black-500 hover:text-green-500 ')
              }
            >
              Korzyści
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='blog'
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('blog');
              }}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'blog'
                  ? ' animation-active text-green-500 '
                  : ' text-black-500 hover:text-green-500 ')
              }
            >
              Blog
            </LinkScroll>
          </ul>
          <div className='col-start-10 col-end-12 flex items-center justify-end font-medium'>
            <Link href='/kierunki'>
              <ButtonOutline>Kierunki</ButtonOutline>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
