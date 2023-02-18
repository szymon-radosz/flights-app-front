import ButtonOutline from './../../misc/ButtonOutline.';
import Link from 'next/link';
import Image from 'next/image';

interface SingleListGridProps {
  cityFrom: string;
  cityTo: string;
}

const SingleListGrid = ({ cityFrom, cityTo }: SingleListGridProps) => {
  const dateTwoWeeksOver = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const dateThreeWeeksOver = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  return (
    <article className='bg-white rounded-xl py-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl '>
      <a href='#'>
        <div className='relative flex items-end overflow-hidden rounded-t-xl'>
          <Image
            src='/assets/london.png'
            alt='Image by MidJourney'
            layout='responsive'
            width={500}
            height={300}
            quality={100}
          />
        </div>

        <div className='mt-1 px-4 pt-4 pb-2.5'>
          <h2 className='text-slate-700'>{`${cityFrom}-${cityTo}`}</h2>
          <div className='mt-3 flex items-end justify-between'>
            <div className='bg-blue-500 text-white hover:bg-blue-600 flex items-center rounded-lg py-1.5 duration-100'>
              <Link
                href={`/kierunki/${cityFrom}/${cityTo}/${dateTwoWeeksOver}/${dateThreeWeeksOver}/1`}
              >
                <ButtonOutline>Wyszukaj</ButtonOutline>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default SingleListGrid;
