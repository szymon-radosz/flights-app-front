import { useEffect, useState } from 'react';

import RowOfferSceleton from './../RowOfferSceleton/RowOfferSceleton';
import SingleFlight from './SingleFlight';

interface FlightsProps {
  foundFlights: any;
}

const Flights = ({ foundFlights }: FlightsProps) => {
  const [showSceleton, setShowSceleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSceleton(false);
    }, 1000);
  }, []);

  return (
    <section className='py-10'>
      <h2 className='text-3xl font-bold leading-normal text-black-600 sm:mb-5 lg:text-3xl xl:text-4xl'>
        Loty
      </h2>

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
