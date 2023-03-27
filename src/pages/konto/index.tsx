import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRequest } from 'utils/api';

import { selectAuth } from '@/store/auth';

import handleAddFirebaseLog from './../../../utils/handleAddFirebaseLog';
import { setAlert } from '../../store/alert';
import { setLoader } from '../../store/loader';
import Layout from '../../../components/Layout/Layout';
import ButtonOutline from '../../../components/misc/ButtonOutline.';
// Import react scroll
import SeoHead from '../../../components/SeoHead';
export default function Konto() {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector(selectAuth);
  const [savedRoutes, setSavedRoutes] = useState([]);

  useEffect(() => {
    //check if logged in
    // console.log(['konto', auth?.token]);
    if (!auth?.token) {
      router.push('/logowanie');
    } else {
      getSavedTravels();
    }
  }, []);

  const handlePlanClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Account',
      name: 'Plan a trip',
      activeUrl: window?.location?.pathname,
    });
  };

  const handleTravelClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Account',
      name: 'Show Travel Details',
      activeUrl: window?.location?.pathname,
    });
  };

  const callSetLoader = (status: boolean) => {
    dispatch(setLoader(status));
  };

  const callSetAlert = (show: boolean, msg: string, type: string) => {
    dispatch(setAlert({ show: show, msg: msg, type: type }));
  };

  const getSavedTravels = async () => {
    const response: any = await getRequest(
      'saved-travels/list',
      callSetLoader,
      callSetAlert,
      {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      }
    );

    console.log(['response', response?.data]);

    setSavedRoutes(response?.data);

    // if (response?.success) {
    //   dispatch(
    //     setAuth({
    //       token: response?.data?.token,
    //       email: data?.email,
    //     })
    //   );
    //   router.push('/konto');
    // }
  };

  return (
    <>
      <SeoHead title='Konto | ostatnibilet.pl' />
      <Layout>
        <div className='mx-auto mt-20 max-w-screen-xl px-6 pt-20 xl:px-16'>
          <h3 className='font-bold uppercase text-black-500'>
            Zapisane przez Ciebie
          </h3>
          <h2 className='text-2xl font-bold font-medium leading-normal text-black-600 lg:text-3xl xl:text-3xl'>
            Podróże
          </h2>
          <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {savedRoutes?.length &&
              savedRoutes?.map(
                (
                  singleRoute: {
                    to: string;
                    from: string;
                    date_from: string;
                    date_to: string;
                    people_count: string;
                  },
                  i
                ) => {
                  return (
                    <Link
                      href={`/kierunki/${singleRoute?.from}/${singleRoute?.to}/${singleRoute?.date_from}/${singleRoute?.date_to}/${singleRoute?.people_count}`}
                      key={i}
                      onClick={handleTravelClick}
                    >
                      <article className='bg-white rounded-xl py-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl '>
                        <a href='#'>
                          <div className='relative flex items-end overflow-hidden rounded-t-xl'>
                            <Image
                              src={`/assets/locations/${singleRoute?.to?.toLowerCase()}.png`}
                              alt={singleRoute?.to}
                              // layout='responsive'
                              width={500}
                              height={300}
                              quality={100}
                            />
                          </div>

                          <div className='mt-1 px-4 pt-4 pb-2.5'>
                            <h2 className='font-bold'>
                              {singleRoute?.from}-{singleRoute?.to}
                            </h2>
                            <div className='mt-2 flex'>
                              <div className='mb-1 flex items-center'>
                                <div className='icon-wrap '>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='18'
                                    height='18'
                                    viewBox='0 0 24 24'
                                    fill='#62E699'
                                  >
                                    <path d='M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z'></path>
                                  </svg>
                                </div>
                                <p className='mr-2 pl-1 text-xs font-bold leading-normal text-black-100'>
                                  {`${singleRoute?.date_from} - 
                                  ${singleRoute?.date_to}`}
                                </p>
                              </div>

                              <div className='mb-1 flex items-center'>
                                <div className='icon-wrap '>
                                  <img
                                    src='/assets/people.png'
                                    width='18'
                                    height='18'
                                  />
                                </div>
                                <p className='pl-1 text-xs font-bold leading-normal text-black-100'>
                                  {singleRoute?.people_count}
                                </p>
                              </div>
                            </div>
                            <div className='mt-3 flex items-end justify-between'>
                              <div className='bg-blue-500 text-white hover:bg-blue-600 flex items-center rounded-lg py-1.5 duration-100'>
                                <ButtonOutline>Pokaż</ButtonOutline>
                              </div>
                            </div>
                          </div>
                        </a>
                      </article>
                    </Link>
                  );
                }
              )}
          </div>
          {/* <div className='mb-10 mt-5 flex justify-center'>
            <Link href='/zaplanuj-podroz' onClick={handlePlanClick}>
              <ButtonPrimary>Zaplanuj kolejną podróż</ButtonPrimary>
            </Link>
          </div> */}
        </div>
      </Layout>
    </>
  );
}
