import React, { useMemo, useState } from 'react';

import SingleListGrid from './SingleListGrid';
import getScrollAnimation from '../../utils/getScrollAnimation';

interface Props {
  isHomePage?: boolean;
}

const ListGrid = ({ isHomePage }: Props) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [list, setList] = useState(
    isHomePage
      ? [
          {
            id: 1,
            cityFrom: 'Warszawa',
            cityTo: 'Londyn',
            img: '/assets/locations/londyn.png',
          },
          {
            id: 2,
            cityFrom: 'Kraków',
            cityTo: 'Rzym',
            img: '/assets/locations/rzym.png',
          },
          {
            id: 3,
            cityFrom: 'Gdańsk',
            cityTo: 'Paryż',
            img: '/assets/locations/paryż.png',
          },
          {
            id: 4,
            cityFrom: 'Katowice',
            cityTo: 'Bolonia',
            img: '/assets/locations/bolonia.png',
          },
        ]
      : [
          {
            id: 1,
            cityFrom: 'Warszawa',
            cityTo: 'Londyn',
            img: '/assets/locations/londyn.png',
          },
          {
            id: 2,
            cityFrom: 'Kraków',
            cityTo: 'Rzym',
            img: '/assets/locations/rzym.png',
          },
          {
            id: 3,
            cityFrom: 'Gdańsk',
            cityTo: 'Paryż',
            img: '/assets/locations/paryż.png',
          },
          {
            id: 4,
            cityFrom: 'Katowice',
            cityTo: 'Bolonia',
            img: '/assets/locations/bolonia.png',
          },
          {
            id: 5,
            cityFrom: 'Warszawa',
            cityTo: 'Lizbona',
            img: '/assets/locations/lizbona.png',
          },
          {
            id: 6,
            cityFrom: 'Poznań',
            cityTo: 'Edynburg',
            img: '/assets/locations/edynburg.png',
          },
          {
            id: 7,
            cityFrom: 'Wrocław',
            cityTo: 'Neapol',
            img: '/assets/locations/neapol.png',
          },
          {
            id: 8,
            cityFrom: 'Wrocław',
            cityTo: 'Ateny',
            img: '/assets/locations/ateny.png',
          },

          {
            id: 9,
            cityFrom: 'Warszawa',
            cityTo: 'Barcelona',
            img: '/assets/locations/barcelona.png',
          },
          {
            id: 10,
            cityFrom: 'Gdańsk',
            cityTo: 'Pisa',
            img: '/assets/locations/piza.png',
          },
          {
            id: 11,
            cityFrom: 'Warszawa',
            cityTo: 'Madryt',
            img: '/assets/locations/madryt.png',
          },
          {
            id: 12,
            cityFrom: 'Wrocław',
            cityTo: 'Porto',
            img: '/assets/locations/porto.png',
          },
        ]
  );

  return (
    // <>
    //   {isHomePage ? (
    //     <ScrollAnimationWrapper className='pt-5 pb-10 sm:pt-5 sm:pb-10'>
    //       <motion.div variants={scrollAnimation}>
    //         <h3 className='font-bold uppercase text-black-500'>Top kierunki</h3>
    //         <h2 className='text-2xl font-bold font-medium leading-normal text-black-600 lg:text-3xl xl:text-3xl'>
    //           Popularne kierunki
    //         </h2>
    //         <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    //           {list?.map((singleListItem, i) => {
    //             return (
    //               <SingleListGrid
    //                 cityTo={singleListItem?.cityTo}
    //                 cityFrom={singleListItem?.cityFrom}
    //                 img={singleListItem?.img}
    //                 key={i}
    //               />
    //             );
    //           })}
    //         </div>
    //       </motion.div>
    //     </ScrollAnimationWrapper>
    //   ) : (
    //     <section className='pt-4 pb-10 lg:pt-10'>
    //       {/* <ScrollAnimationWrapper className='py-10'>
    //   <motion.div variants={scrollAnimation}> */}
    //       <h3 className='font-bold uppercase text-black-500'>Top kierunki</h3>
    //       <h2 className='text-2xl font-bold font-medium leading-normal text-black-600 lg:text-3xl xl:text-3xl'>
    //         Popularne kierunki
    //       </h2>
    //       <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    //         {list?.map((singleListItem, i) => {
    //           return (
    //             <SingleListGrid
    //               cityTo={singleListItem?.cityTo}
    //               cityFrom={singleListItem?.cityFrom}
    //               img={singleListItem?.img}
    //               key={i}
    //             />
    //           );
    //         })}
    //       </div>
    //       {/* </motion.div>
    // </ScrollAnimationWrapper> */}
    //     </section>
    //   )}
    // </>
    <section className='pt-4 pb-10 lg:pt-10'>
      {/* <ScrollAnimationWrapper className='py-10'>
    <motion.div variants={scrollAnimation}> */}
      <h3 className='font-bold uppercase text-black-500'>Top kierunki</h3>
      <h2 className='text-2xl font-bold font-medium leading-normal text-black-600 lg:text-3xl xl:text-3xl'>
        Popularne kierunki
      </h2>
      <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {list?.map((singleListItem, i) => {
          return (
            <SingleListGrid
              cityTo={singleListItem?.cityTo}
              cityFrom={singleListItem?.cityFrom}
              img={singleListItem?.img}
              key={i}
            />
          );
        })}
      </div>
      {/* </motion.div>
      </ScrollAnimationWrapper> */}
    </section>
  );
};

export default ListGrid;
