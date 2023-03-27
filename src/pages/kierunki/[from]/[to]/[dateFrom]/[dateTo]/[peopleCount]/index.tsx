import axios from 'axios';
import Accomodation from 'components/Accomodation';
import Flights from 'components/Flights';
import Layout from 'components/Layout/Layout';
import SearchBar from 'components/SearchBar';
import SeoHead from 'components/SeoHead';
import Share from 'components/Share/Share';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAlert } from '@/store/alert';
import { selectAuth } from '@/store/auth';
import { setLoader } from '@/store/loader';

import ButtonPrimary from '../../../../../../../../components/misc/ButtonPrimary';
import { postRequest } from '../../../../../../../../utils/api';
import getScrollAnimation from '../../../../../../../../utils/getScrollAnimation';
import handleAddFirebaseLog from '../../../../../../../../utils/handleAddFirebaseLog';

interface QueryProps {
  from?: string;
  to?: string;
  dateFrom?: string;
  dateTo?: string;
  peopleCount?: number;
}

export default function DirectionsSearchPage() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { from, to, dateFrom, dateTo, peopleCount }: QueryProps = router.query;

  const [foundFlights, setFoundFlights] = useState([]);
  const [allowShowBottomBar, setAllowBottomBar] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [saved, setSaved] = useState(false);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const menuVariants = {
    open: {
      opacity: 1,
      // x: 0,
    },
    closed: {
      opacity: 0,
      // x: '-100%',
    },
  };

  const [routerState, setRouterState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    { from: '', to: '', dateFrom: '', dateTo: '', peopleCount: 1 }
  );

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    if (from && to && dateFrom && dateTo && peopleCount) {
      setRouterState({
        from,
        to,
        dateFrom,
        dateTo,
        peopleCount,
      });
      axios
        .get(
          `${process?.env?.NEXT_PUBLIC_API_URL}flight/${from
            .normalize('NFD')
            .replace(/\u0142/g, 'l')
            .replace(/\u0141/g, 'L')
            .replace(/[\u0300-\u036f]/g, '')}/${to
            .normalize('NFD')
            .replace(/\u0142/g, 'l')
            .replace(/\u0141/g, 'L')
            .replace(/[\u0300-\u036f]/g, '')}/${dateFrom}/${dateTo}`
        )
        .then((response) => {
          if (response?.data) {
            setFoundFlights(response?.data);
          }
        })
        .catch((error) => {
          setFoundFlights([]);
          // console.log(error);
        });
    }
  };

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  useEffect(() => {
    setTimeout(() => {
      setAllowBottomBar(true);
    }, 500);
  }, []);

  const callSetLoader = (status: boolean) => {
    dispatch(setLoader(status));
  };

  const callSetAlert = (show: boolean, msg: string, type: string) => {
    dispatch(setAlert({ show: show, msg: msg, type: type }));
  };

  const handleSaveTravel = async () => {
    if (!auth?.token) {
      router.push('/logowanie');
    } else if (!saved && dateFrom && dateTo && from && to && peopleCount) {
      const response: any = await postRequest(
        'saved-travels/store',
        {
          from,
          to,
          date_from: dateFrom,
          date_to: dateTo,
          people_count: peopleCount,
        },
        callSetLoader,
        callSetAlert,
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );

      console.log([
        'handleSaveTravel',
        response,
        from,
        to,
        dateFrom,
        dateTo,
        peopleCount,
      ]);

      handleAddFirebaseLog('click_element', {
        location: 'Travel Details',
        name: 'Save to Favourites',
        activeUrl: window?.location?.pathname,
      });

      setSaved(true);
    }
  };

  return (
    <>
      <SeoHead
        title={`Szczegóły - ${from}-${to} od:${dateFrom} do:${dateTo} | ostatnibilet.pl`}
      />
      <Layout>
        <div className='mt-8 flex justify-center bg-gray-100 py-12'>
          <SearchBar
            setFoundFlights={setFoundFlights}
            initialDateFrom={dateFrom}
            initialDateTo={dateTo}
            initialDirectionFrom={from}
            initialDirectionTo={to}
            initialPeopleCount={peopleCount}
          />
        </div>
        <div className='mx-auto max-w-screen-xl px-8 xl:px-16'>
          <Flights
            foundFlights={foundFlights}
            dateFrom={dateFrom}
            dateTo={dateTo}
            directionFrom={from}
            directionTo={to}
            peopleCount={peopleCount}
          />
          <Accomodation
            directionTo={routerState?.to}
            dateFrom={routerState?.dateFrom}
            dateTo={routerState?.dateTo}
            peopleCount={routerState?.peopleCount}
          />
          <Share />
        </div>

        {/* {allowShowBottomBar && ( */}
        <motion.div
          className={`${
            allowShowBottomBar ? 'bottom-0' : 'bottom-[-1000px]'
          } fixed left-0 w-full bg-white-500 py-4 shadow-md sm:py-8`}
          variants={menuVariants}
          animate={scrollTop > 0 && allowShowBottomBar ? 'open' : 'closed'}
        >
          {/* <div className='fixed bottom-0 left-0 w-full bg-white-500 py-8 shadow-md'> */}
          {/* <div className='mx-auto block grid max-w-screen-xl grid-flow-col items-center justify-between px-6 sm:flex sm:px-8 sm:py-4 lg:px-16 '> */}
          <div className='mx-auto block max-w-screen-xl text-center  sm:flex sm:items-center sm:justify-between sm:px-8 sm:py-4 sm:text-left lg:px-16 '>
            <div className=''>
              <h2 className='text-xl font-bold sm:text-2xl'>
                {from}-{to}
              </h2>
              <div className='mt-2 mb-3 flex justify-center sm:mb-0 sm:justify-start'>
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
                    {`${dateFrom} - 
                                  ${dateTo}`}
                  </p>
                </div>

                <div className='mb-1 flex items-center'>
                  <div className='icon-wrap '>
                    <img src='/assets/people.png' width='18' height='18' />
                  </div>
                  <p className='pl-1 text-xs font-bold leading-normal text-black-100'>
                    {peopleCount}
                  </p>
                </div>
              </div>
            </div>

            <div onClick={handleSaveTravel} className='mb-2 sm:mb-0'>
              <ButtonPrimary>
                {saved ? 'Zapisano' : 'Zapisz'} do ulubionych
              </ButtonPrimary>
            </div>
          </div>
          {/* </div> */}
        </motion.div>
        {/* )} */}
      </Layout>
    </>
  );
}
