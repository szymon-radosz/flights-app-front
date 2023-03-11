import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/tailwind.css';
import '../styles/slick.css';

import { analytics } from './../../firebase';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log(['process?.env?.NODE_ENV', process?.env?.NODE_ENV, analytics]);
    // analytics();
    // if (process?.env?.NODE_ENV === 'production') {
    //   getAnalytics(firebase);
    // }
  }, []);

  return <Component key={router.asPath} {...pageProps} />;
}

export default MyApp;
