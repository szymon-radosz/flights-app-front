import React, { useState } from 'react';

import SingleBlogPost from './SingleBlogPost';
interface Props {
  isHomePage?: boolean;
}

const BlogPosts = ({ isHomePage }: Props) => {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'Przygotowania do kilkumiesięcznej podróży',
      date: '2022-10-15',
      imgUrl: '/assets/article1.png',
      url: 'przygotowania-do-kilkumiesiecznej-podrozy',
    },
    {
      id: 2,
      title: 'Oszczędzanie pieniędzy na noclegu',
      date: '2022-11-02',
      imgUrl: '/assets/article2.png',
      url: 'oszczedzanie-pieniedzy-na-noclegu',
      additionalTitleClass: 'mr-10 sm:mr-5',
    },
    {
      id: 3,
      title: 'Jak zostać cyfrowym nomadem?',
      date: '2022-12-11',
      imgUrl: '/assets/article3.png',
      url: 'jak-zostac-cyfrowym-nomadem',
      additionalTitleClass: 'mr-20 sm:mr-10',
    },
    {
      id: 4,
      title: 'Oszczędzanie pieniędzy podczas podróży',
      date: '2022-01-17',
      imgUrl: '/assets/article4.png',
      url: 'oszczedzanie-pieniedzy-podczas-podrozy',
    },
  ]);

  return (
    <section className='pt-4 pb-10 lg:mb-5 lg:pt-5'>
      <h3 className='font-bold uppercase text-black-500'>Blog</h3>
      <h2 className='text-2xl font-bold font-medium leading-normal text-black-600 lg:text-3xl xl:text-3xl'>
        Co w trawie piszczy
      </h2>
      <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {list?.map((singleListItem, i) => {
          return (
            <SingleBlogPost
              title={singleListItem?.title}
              date={singleListItem?.date}
              imgUrl={singleListItem?.imgUrl}
              url={singleListItem?.url}
              additionalTitleClass={singleListItem?.additionalTitleClass}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogPosts;
