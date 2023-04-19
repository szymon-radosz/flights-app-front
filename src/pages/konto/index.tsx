import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRequest, getRequest } from 'utils/api';

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
  const [savedPlans, setSavedPlans] = useState([]);

  useEffect(() => {
    //check if logged in
    // console.log(['konto', auth?.token]);
    if (!auth?.token) {
      router.push('/logowanie');
    } else {
      getSavedTravels();
      getSavedPlans();
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

  const handleTravelPlanClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Account',
      name: 'Show Travel Plan',
      activeUrl: window?.location?.pathname,
    });
  };

  const callSetLoader = (status: boolean) => {
    dispatch(setLoader(status));
  };

  const callSetAlert = (show: boolean, msg: string, type: string) => {
    dispatch(setAlert({ show: show, msg: msg, type: type }));
  };

  const getSavedTravels = async (
    ignoreLoader?: boolean,
    ignoreAlert?: boolean
  ) => {
    const response: any = await getRequest(
      'saved-travels/list',
      !ignoreLoader && callSetLoader,
      !ignoreAlert && callSetAlert,
      {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      }
    );

    // console.log(['response', response?.data]);

    setSavedRoutes(response?.data);
  };

  const handleRemoveTravel = async (id: number) => {
    const response: any = await deleteRequest(
      'saved-travels/remove',
      {
        data: { travel_id: id },
        headers: { Authorization: `Bearer ${auth?.token}` },
      },
      callSetLoader,
      callSetAlert
    );

    if (response?.success) {
      // setTimeout(() => {
      //   getSavedTravels();
      // }, 1000);
      getSavedTravels(true, true);
    }

    // console.log(['response', response]);
  };

  const getSavedPlans = async (
    ignoreLoader?: boolean,
    ignoreAlert?: boolean
  ) => {
    const response: any = await getRequest(
      'travel-plans/list',
      !ignoreLoader && callSetLoader,
      !ignoreAlert && callSetAlert,
      {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      }
    );

    // console.log(['response', response?.data]);

    setSavedPlans(response?.data);
  };

  const handleRemoveTravelPlan = async (id: number) => {
    const response: any = await deleteRequest(
      'travel-plans/remove',
      {
        data: { plan_id: id },
        headers: { Authorization: `Bearer ${auth?.token}` },
      },
      callSetLoader,
      callSetAlert
    );

    if (response?.success) {
      // setTimeout(() => {
      //   getSavedTravels();
      // }, 1000);
      getSavedPlans(true, true);
    }

    // console.log(['response', response]);
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
            {savedRoutes?.length ? (
              savedRoutes?.map(
                (
                  singleRoute: {
                    id: number;
                    to: string;
                    from: string;
                    date_from: string;
                    date_to: string;
                    people_count: string;
                  },
                  i
                ) => {
                  const redirectToTravelRoute = `/kierunki/${singleRoute?.from}/${singleRoute?.to}/${singleRoute?.date_from}/${singleRoute?.date_to}/${singleRoute?.people_count}`;
                  return (
                    <article
                      key={i}
                      className='bg-white rounded-xl py-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl '
                    >
                      <div className='relative flex items-end overflow-hidden rounded-t-xl'>
                        <Link href={redirectToTravelRoute}>
                          <Image
                            src={`/assets/locations/${singleRoute?.to?.toLowerCase()}.png`}
                            alt={singleRoute?.to}
                            // layout='responsive'
                            width={500}
                            height={300}
                            quality={100}
                          />
                        </Link>
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
                        <div className='mt-3 flex items-center'>
                          <div
                            onClick={handleTravelClick}
                            className='bg-blue-500 text-white hover:bg-blue-600 flex items-center rounded-lg py-1.5 duration-100'
                          >
                            <Link href={redirectToTravelRoute}>
                              <ButtonOutline>Pokaż</ButtonOutline>
                            </Link>
                          </div>
                          <button
                            onClick={() => handleRemoveTravel(singleRoute?.id)}
                            className='ml-2 min-h-[40px] rounded-l-full rounded-r-full border border-red-500 bg-red-500 py-2 px-2 font-medium capitalize tracking-wide text-green-500 outline-none transition-all hover:shadow-lg sm:px-2 '
                          >
                            <img
                              src='/assets/remove.png'
                              width='22'
                              height='22'
                            />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                }
              )
            ) : (
              // <p className='mb-[50vh] text-black-100 sm:mb-[60vh] 2xl:mb-[50vh]'>
              <p className=' text-black-100'>Brak zapisanych podróży.</p>
            )}
          </div>
          {/* <div className='mb-10 mt-5 flex justify-center'>
            <Link href='/zaplanuj-podroz' onClick={handlePlanClick}>
              <ButtonPrimary>Zaplanuj kolejną podróż</ButtonPrimary>
            </Link>
          </div> */}
        </div>

        <div className='mx-auto max-w-screen-xl px-6 pt-20 xl:px-16'>
          <h3 className='font-bold uppercase text-black-500'>
            Wygenerowane przez Ciebie
          </h3>
          <h2 className='text-2xl font-bold font-medium leading-normal text-black-600 lg:text-3xl xl:text-3xl'>
            Plany Podróży
          </h2>
          <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-3 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {savedPlans?.length ? (
              savedPlans?.map(
                (
                  singleRoute: {
                    id: number;
                    to: string;
                    from: string;
                    date_from: string;
                    date_to: string;
                    people_count: string;
                    generated_plan: string;
                    expensiveness: string;
                    pace: string;
                    activities: string;
                  },
                  i
                ) => {
                  const redirectToTravelRoute = `/kierunki/${singleRoute?.from}/${singleRoute?.to}/${singleRoute?.date_from}/${singleRoute?.date_to}/${singleRoute?.people_count}`;
                  return (
                    <article
                      key={i}
                      className='bg-white rounded-xl py-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl '
                    >
                      <div className='relative flex items-end overflow-hidden rounded-t-xl'>
                        <Link href={redirectToTravelRoute}>
                          <Image
                            src={`/assets/locations/${singleRoute?.to?.toLowerCase()}.png`}
                            alt={singleRoute?.to}
                            // layout='responsive'
                            width={500}
                            height={300}
                            quality={100}
                          />
                        </Link>
                      </div>

                      <div className='mt-1 px-4 pt-4 pb-2.5'>
                        <h2 className='mb-2 font-bold'>
                          {singleRoute?.from}-{singleRoute?.to}
                        </h2>
                        <div className='flex'>
                          <div className='mb-2 flex items-center'>
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
                        <div className='mb-2 flex items-center'>
                          <div className='icon-wrap '>
                            <img
                              src='/assets/money.png'
                              width='18'
                              height='18'
                            />
                          </div>
                          <p className='pl-1 text-xs font-bold leading-normal text-black-100'>
                            {singleRoute?.expensiveness}
                          </p>
                        </div>
                        <div className='mb-2 flex'>
                          <div className='icon-wrap '>
                            <img
                              src='/assets/pace.png'
                              width='18'
                              height='18'
                            />
                          </div>
                          <p className='pl-1 text-xs font-bold leading-normal text-black-100'>
                            {singleRoute?.pace}
                          </p>
                        </div>
                        <div className='mb-2 flex'>
                          <div className='icon-wrap '>
                            <img
                              src='/assets/wine.png'
                              width='18'
                              height='18'
                            />
                          </div>
                          <p className='pl-1 text-xs font-bold leading-normal text-black-100'>
                            {singleRoute?.activities}
                          </p>
                        </div>
                        <div className='mt-3 flex items-center'>
                          <div
                            onClick={handleTravelPlanClick}
                            className='bg-blue-500 text-white hover:bg-blue-600 flex items-center rounded-lg py-1.5 duration-100'
                          >
                            {/* <Link href={redirectToTravelRoute}> */}
                            <ButtonOutline>
                              {singleRoute?.generated_plan
                                ? 'Pokaż'
                                : 'Oczekujący'}
                            </ButtonOutline>
                            {/* </Link> */}
                          </div>
                          <button
                            onClick={() =>
                              handleRemoveTravelPlan(singleRoute?.id)
                            }
                            className='ml-2 min-h-[40px] rounded-l-full rounded-r-full border border-red-500 bg-red-500 py-2 px-2 font-medium capitalize tracking-wide text-green-500 outline-none transition-all hover:shadow-lg sm:px-2 '
                          >
                            <img
                              src='/assets/remove.png'
                              width='22'
                              height='22'
                            />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                }
              )
            ) : (
              <p className='mb-[10vh] text-black-100 sm:mb-[20vh] 2xl:mb-[40vh]'>
                Brak zapisanych planów podróży.
              </p>
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
