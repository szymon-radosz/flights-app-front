import Image from 'next/image';
import Link from 'next/link';

import handleAddFirebaseLog from './../../../utils/handleAddFirebaseLog';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ButtonOutline from './../../misc/ButtonOutline.';

interface SingleListGridProps {
  cityFrom: string;
  cityTo: string;
  img: string;
  location?: string;
}

const SingleListGrid = ({
  cityFrom,
  cityTo,
  img,
  location,
}: SingleListGridProps) => {
  const dateTwoWeeksOver = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const dateThreeWeeksOver = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const redirectUrl = `/kierunki/${cityFrom}/${cityTo}/${dateTwoWeeksOver}/${dateThreeWeeksOver}/1`;

  const handleElementPress = () => {
    handleAddFirebaseLog('click_element', {
      location: location,
      name: 'Directions Element',
      activeUrl: window?.location?.pathname,
      url: redirectUrl,
    });
  };

  return (
    <Link href={redirectUrl} onClick={handleElementPress}>
      <article className='bg-white rounded-xl py-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl '>
        <a href='#'>
          <div className='relative flex items-end overflow-hidden rounded-t-xl'>
            <Image
              src={img}
              alt={cityTo}
              // layout='responsive'
              width={500}
              height={300}
              quality={100}
            />
          </div>

          <div className='mt-1 px-4 pt-4 pb-2.5'>
            <h2 className='font-bold'>{`${cityFrom}-${cityTo}`}</h2>
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
    </Link>
  );
};

export default SingleListGrid;
