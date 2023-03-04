import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const RowOfferSceleton = () => (
  // <div className='text-inherit relative mb-2 flex w-full items-center justify-between rounded-t-lg border-b-2 border-gray-100 px-0 pt-1 pb-3'>
  //   <ContentLoader
  //     speed={2}
  //     // width={400}
  //     height={100}
  //     // viewBox='0 0 400 160'
  //     backgroundColor='#f3f3f3'
  //     foregroundColor='#ecebeb'
  //   >
  //     <rect x='0' y='0' rx='12' ry='12' width='100' height='100' />
  //     <rect x='117' y='22' rx='3' ry='3' width='200' height='13' />
  //     <rect x='117' y='39' rx='3' ry='3' width='80' height='10' />
  //     <rect x='117' y='64' rx='3' ry='3' width='90' height='11' />
  //   </ContentLoader>
  // </div>

  <div className='text-inherit relative mb-2 flex w-full items-center justify-between rounded-t-lg border-b-2 border-gray-100 px-0 pb-5 sm:pb-2'>
    <div className='flex'>
      <div className='text-white ease-soft-in-out mr-4 inline-flex items-center justify-center rounded-xl text-base transition-all duration-200'>
        <div className='mb-0 h-[70px] w-[70px] rounded-xl sm:mb-2 sm:h-[100px] sm:w-[100px] '>
          <Skeleton height='100%' width='100%' borderRadius={12} />
        </div>
      </div>
      <div className='flex w-[135px] flex-col items-start justify-center sm:w-[300px]'>
        <h6 className='sm: text-m mt-1 w-[150px] font-medium leading-tight text-black-600 sm:mb-0 sm:w-[200px]'>
          <Skeleton height={13} width='100%' />
        </h6>
        <p className='mb-0 text-xs leading-tight'>
          <Skeleton height={10} width={80} />
        </p>
        <p className='text-s mt-2 mb-0 font-bold leading-tight'>
          <Skeleton height={11} width={90} />
        </p>
      </div>
    </div>
  </div>
);

export default RowOfferSceleton;
