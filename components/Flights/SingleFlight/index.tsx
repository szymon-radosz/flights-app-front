import Image from 'next/image';

import ButtonOutline from './../../misc/ButtonOutline.';
interface SingleListGridProps {
  logo: string;
  date: string;
  route: string;
  price: number | string;
  url: string;
}

const SingleFlight = ({
  logo,
  date,
  route,
  price,
  url,
}: SingleListGridProps) => {
  return (
    <>
      {/* <Skeleton className='h-72 w-72' /> */}
      <div className='text-inherit relative mb-2 flex w-full items-center justify-between rounded-t-lg border-b-2 border-gray-100 px-0 pt-1 pb-3'>
        <div className='flex'>
          <div className='text-white ease-soft-in-out mr-4 inline-flex items-center justify-center rounded-xl text-base transition-all duration-200'>
            <Image
              src={logo}
              width={100}
              height={100}
              className='shadow-soft-2xl h-[70px] w-[70px] rounded-xl sm:h-[100px] sm:w-[100px] '
              alt='Logo'
            />
          </div>
          <div className='flex w-[135px] flex-col items-start justify-center sm:w-[300px]'>
            <h6 className=' text-m  mb-1 font-medium leading-tight text-black-600 sm:mb-0 '>
              {route}
            </h6>
            <p className='mb-0 text-xs leading-tight'>{date}</p>
            <p className='text-s mt-2 mb-0 font-bold leading-tight'>
              {price ? `${price} zł` : ''}
            </p>
          </div>
        </div>
        <a target='_blank' href={url} rel='noopener noreferrer'>
          <ButtonOutline>Pokaż</ButtonOutline>
        </a>
      </div>
    </>
  );
};

export default SingleFlight;
