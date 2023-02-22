import Image from 'next/image';
import Link from 'next/link';

import ButtonOutline from './../../misc/ButtonOutline.';

interface SingleBlogPostProps {
  title: string;
  date: string;
  imgUrl: string;
  url: string;
  additionalTitleClass?: string;
}

const SingleBlogPost = ({
  title,
  date,
  imgUrl,
  url,
  additionalTitleClass,
}: SingleBlogPostProps) => {
  return (
    <Link href={`/blog/${url}`}>
      <article className='bg-white rounded-xl py-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl '>
        <a href='#'>
          <div className='relative flex items-end overflow-hidden rounded-t-xl'>
            <Image
              src={imgUrl}
              alt={title}
              layout='responsive'
              width={500}
              height={300}
              quality={100}
            />
          </div>

          <div className='mt-1 px-4 pt-4 pb-2.5'>
            <h2 className={`${additionalTitleClass} font-bold`}>{title}</h2>
            <div className='mt-3 flex items-end justify-between'>
              <div className='bg-blue-500 text-white hover:bg-blue-600 flex items-center rounded-lg py-1.5 duration-100'>
                <Link href={`/blog/${url}`}>
                  <ButtonOutline>Sprawdź</ButtonOutline>
                </Link>
              </div>
            </div>
          </div>
        </a>
      </article>
    </Link>
  );
};

export default SingleBlogPost;
