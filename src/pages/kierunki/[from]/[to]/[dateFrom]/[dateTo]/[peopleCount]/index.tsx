import axios from 'axios';
import Accomodation from 'components/Accomodation';
import Flights from 'components/Flights';
import Layout from 'components/Layout/Layout';
import SearchBar from 'components/SearchBar';
import SeoHead from 'components/SeoHead';
import Share from 'components/Share/Share';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';

interface QueryProps {
  from?: string;
  to?: string;
  dateFrom?: string;
  dateTo?: string;
  peopleCount?: number;
}

export default function DirectionsSearchPage() {
  const router = useRouter();
  const { from, to, dateFrom, dateTo, peopleCount }: QueryProps = router.query;

  const [foundFlights, setFoundFlights] = useState([]);

  const [routerState, setRouterState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    { from: '', to: '', dateFrom: '', dateTo: '', peopleCount: 1 }
  );

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    // console.log(['getDetails']);
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

  return (
    <>
      <SeoHead
        title={`Szczegóły - ${from}-${to} od:${dateFrom} do:${dateTo}`}
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
          <Flights foundFlights={foundFlights} />
          <Accomodation
            directionTo={routerState?.to}
            dateFrom={routerState?.dateFrom}
            dateTo={routerState?.dateTo}
            peopleCount={routerState?.peopleCount}
          />
          <Share />
        </div>
      </Layout>
    </>
  );
}
