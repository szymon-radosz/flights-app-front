import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/store/auth';

import handleAddFirebaseLog from './../../../utils/handleAddFirebaseLog';
import Layout from '../../../components/Layout/Layout';
// Import react scroll
import SeoHead from '../../../components/SeoHead';

export default function ZaplanujPodroz() {
  const router = useRouter();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    //check if logged in
    // console.log(['konto', auth?.token]);
    if (!auth?.token) {
      router.push('/logowanie');
    }
  }, []);

  const handlePlanClick = () => {
    handleAddFirebaseLog('click_element', {
      location: 'Account',
      name: 'Plan a trip',
      activeUrl: window?.location?.pathname,
    });
  };

  return (
    <>
      <SeoHead title='Zaplanuj podróż | ostatnibilet.pl' />
      <Layout>
        <div className='mx-auto mt-20 max-w-screen-xl px-6 pt-20 xl:px-16'>
          {/* <h1>Zaplanuj podróż</h1> */}
          {/* <div>
            <Link href='/zaplanuj-podroz' onClick={handlePlanClick}>
              <ButtonPrimary>Zaplanuj kolejną podróż</ButtonPrimary>
            </Link>
          </div> */}

          {/* <label
            htmlFor='default-range'
            className='text-gray-900 dark:text-white mb-2 block text-sm font-medium'
          >
            Default range
          </label>
          <input
            id='default-range'
            type='range'
            value='50'
            className='bg-gray-200 dark:bg-gray-700 h-2 w-full cursor-pointer appearance-none rounded-lg'
          /> */}
        </div>
      </Layout>
    </>
  );
}
