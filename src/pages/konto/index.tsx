import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/store/auth';

import Layout from '../../../components/Layout/Layout';
import SeoHead from '../../../components/SeoHead';

export default function Konto() {
  const auth = useSelector(selectAuth);

  useEffect(() => {
    //check if logged in
    console.log(['konto', auth?.token]);
  }, []);

  return (
    <>
      <SeoHead title='Konto | ostatnibilet.pl' />
      <Layout>Konto</Layout>
    </>
  );
}
