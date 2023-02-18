import SingleFlight from './SingleFlight';

interface FlightsProps {
  foundFlights: any;
}

const Flights = ({ foundFlights }: FlightsProps) => {
  return (
    <section className='py-10'>
      <h2 className=' mb-5 text-3xl font-medium leading-normal text-black-600 lg:text-3xl xl:text-4xl'>
        Loty
      </h2>

      {foundFlights?.flightTo ? (
        <>
          <h4 className=' mb-5 text-lg font-medium leading-normal text-black-600 lg:text-2xl'>
            Loty do miejsca docelowego
          </h4>
          {foundFlights?.flightTo?.length ? (
            foundFlights?.flightTo?.map(
              (flight: {
                date: string;
                actual_price: string;
                direction_from: string;
                direction_to: string;
                url: string;
                operator: string;
              }) => {
                return (
                  <SingleFlight
                    logo={`/assets/${flight?.operator}.png`}
                    date={flight?.date}
                    route={`${flight?.direction_from} - ${flight?.direction_to}`}
                    price={flight?.actual_price}
                    url={flight?.url}
                    key={flight?.url}
                  />
                );
              }
            )
          ) : (
            <h6>Brak lotów w wybranym terminie</h6>
          )}
        </>
      ) : null}

      {foundFlights?.flightReturn ? (
        <>
          <h4 className='mt-10 mb-5 text-lg font-medium leading-normal text-black-600 lg:text-2xl '>
            Loty powrotne
          </h4>
          {foundFlights?.flightReturn?.length ? (
            foundFlights?.flightReturn?.map(
              (flight: {
                date: string;
                actual_price: string;
                direction_from: string;
                direction_to: string;
                url: string;
                operator: string;
              }) => {
                return (
                  <SingleFlight
                    logo={`/assets/${flight?.operator}.png`}
                    date={flight?.date}
                    route={`${flight?.direction_from} - ${flight?.direction_to}`}
                    price={flight?.actual_price}
                    url={flight?.url}
                    key={flight?.url}
                  />
                );
              }
            )
          ) : (
            <h6>Brak lotów w wybranym terminie</h6>
          )}
        </>
      ) : null}
    </section>
  );
};

export default Flights;
