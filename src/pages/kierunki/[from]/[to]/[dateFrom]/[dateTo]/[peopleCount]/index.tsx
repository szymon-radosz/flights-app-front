import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../../../../../../components/Layout/Layout';
import SeoHead from '../../../../../../../../components/SeoHead';
import SearchBar from '../../../../../../../../components/SearchBar';
import Flights from '../../../../../../../../components/Flights';

interface QueryProps {
  from?: string;
  to?: string;
  dateFrom?: string;
  dateTo?: string;
  peopleCount?: string | number;
}

export default function DirectionsSearchPage() {
  const router = useRouter();
  const { from, to, dateFrom, dateTo, peopleCount }: QueryProps = router.query;

  const [foundFlights, setFoundFlights] = useState([]);

  return (
    <>
      <SeoHead title='Szczegóły' />
      <Layout>
        <div className='mt-8 flex justify-center bg-gray-100 py-12'>
          <SearchBar
            setFoundFlights={setFoundFlights}
            initialDateFrom={dateFrom}
            initialDateTo={dateTo}
            initialDirectionFrom={from}
            initialDirectionTo={to}
          />
        </div>
        {/* <h1>
          Szukaj {from}, {to}, {dateFrom}, {dateTo}, {peopleCount}
        </h1> */}
        <div className='mx-auto max-w-screen-xl px-8 xl:px-16'>
          <Flights foundFlights={foundFlights} />
        </div>
      </Layout>
    </>
  );
}
