import { useState } from 'react';

import Layout from '../../../components/Layout/Layout';
import ListGrid from '../../../components/ListGrid';
import SearchBar from '../../../components/SearchBar';
import SeoHead from '../../../components/SeoHead';

export default function Directions() {
  const [foundFlights, setFoundFlights] = useState([]);

  return (
    <>
      <SeoHead title='Kierunki | ostatnibilet.pl' />
      <Layout>
        <div className='mt-8 flex justify-center bg-gray-100 py-12'>
          <SearchBar setFoundFlights={setFoundFlights} isListView={true} />
        </div>
        <div className='mx-auto max-w-screen-xl px-6 pt-5 xl:px-16'>
          <ListGrid location='Directions' />
        </div>
      </Layout>
    </>
  );
}
