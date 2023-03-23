import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAlert } from '@/store/alert';
import { selectAuth } from '@/store/auth';
import { setLoader } from '@/store/loader';

import { postRequest } from './../../utils/api';
import handleAddFirebaseLog from './../../utils/handleAddFirebaseLog';
import ButtonPrimary from './../misc/ButtonPrimary';
import RowOfferSceleton from './../RowOfferSceleton/RowOfferSceleton';
import SingleFlight from './SingleFlight';

interface FlightsProps {
  foundFlights: any;
  dateFrom?: string;
  dateTo?: string;
  directionFrom?: string;
  directionTo?: string;
  peopleCount?: number;
}

const Flights = ({
  foundFlights,
  dateFrom,
  dateTo,
  directionFrom,
  directionTo,
  peopleCount,
}: FlightsProps) => {
  const router = useRouter();
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [showSceleton, setShowSceleton] = useState(true);

  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSceleton(false);
    }, 1000);
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
    } else if (
      !saved &&
      dateFrom &&
      dateTo &&
      directionFrom &&
      directionTo &&
      peopleCount
    ) {
      const response: any = await postRequest(
        'saved-travels/store',
        {
          from: directionFrom,
          to: directionTo,
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
        directionFrom,
        directionTo,
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
    <section className='py-10'>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold leading-normal text-black-600 sm:mb-5 lg:text-3xl xl:text-4xl'>
          Loty
        </h2>
        <div onClick={handleSaveTravel}>
          <ButtonPrimary>
            {saved ? 'Zapisano' : 'Zapisz'} do ulubionych
          </ButtonPrimary>
        </div>
      </div>

      <>
        <h4 className='mb-5 text-lg font-bold font-medium leading-normal text-black-500 lg:text-2xl'>
          Loty do miejsca docelowego
        </h4>

        {showSceleton ? (
          <RowOfferSceleton />
        ) : foundFlights?.flightTo ? (
          <>
            {foundFlights?.flightTo?.length ? (
              foundFlights?.flightTo?.map(
                (
                  flight: {
                    date: string;
                    actual_price: string;
                    direction_from: string;
                    direction_to: string;
                    url: string;
                    operator: string;
                  },
                  i: number
                ) => {
                  return (
                    <SingleFlight
                      logo={`/assets/${flight?.operator}.png`}
                      date={flight?.date}
                      route={`${flight?.direction_from} - ${flight?.direction_to}`}
                      price={flight?.actual_price}
                      url={flight?.url}
                      key={`${flight?.url}-${i}`}
                    />
                  );
                }
              )
            ) : (
              <h6 className='font-light'>Brak lotów w wybranym terminie</h6>
            )}
          </>
        ) : null}
      </>

      <>
        <h4 className='mt-10 mb-5 text-lg font-bold font-medium leading-normal text-black-500 lg:text-2xl '>
          Loty powrotne
        </h4>

        {showSceleton ? (
          <RowOfferSceleton />
        ) : foundFlights?.flightReturn ? (
          <>
            {foundFlights?.flightReturn?.length ? (
              foundFlights?.flightReturn?.map(
                (
                  flight: {
                    date: string;
                    actual_price: string;
                    direction_from: string;
                    direction_to: string;
                    url: string;
                    operator: string;
                  },
                  i: number
                ) => {
                  return (
                    <SingleFlight
                      logo={`/assets/${flight?.operator}.png`}
                      date={flight?.date}
                      route={`${flight?.direction_from} - ${flight?.direction_to}`}
                      price={flight?.actual_price}
                      url={flight?.url}
                      key={`${flight?.url}-${i + 100}`}
                    />
                  );
                }
              )
            ) : (
              // <h6 className='font-light sm:pb-20v'>
              <h6 className='mb-5 font-light'>
                Brak lotów w wybranym terminie
              </h6>
            )}
          </>
        ) : null}
      </>

      {/* <RowOfferSceletonDesktop /> */}
    </section>
  );
};

export default Flights;
