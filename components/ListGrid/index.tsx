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
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
        ]
      : [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
          {
            id: 4,
          },
          {
            id: 5,
          },
          {
            id: 6,
          },
          {
            id: 7,
          },
          {
            id: 8,
          },
          {
            id: 9,
          },
          {
            id: 10,
          },
          {
            id: 11,
          },
          {
            id: 12,
          },
        ]
  );

  return (
    <section className='pt-4 pb-10 lg:pt-10'>
      {/* <ScrollAnimationWrapper className='py-10'>
      <motion.div variants={scrollAnimation}> */}
      <h2 className=' text-3xl font-medium leading-normal text-black-600 lg:text-3xl xl:text-4xl'>
        Popularne kierunki
      </h2>
      <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {list?.map((singleListItem, i) => {
          return <SingleListGrid cityTo='Londyn' cityFrom='Warszawa' key={i} />;
        })}
      </div>
      {/* </motion.div>
    </ScrollAnimationWrapper> */}
    </section>
  );
};

export default ListGrid;
