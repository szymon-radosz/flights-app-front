import { getAnalytics } from 'firebase/analytics';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/tailwind.css';
import '../styles/slick.css';

import { firebase } from '../../firebase';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process?.env?.NODE_ENV === 'production') {
      getAnalytics(firebase);
    }
  }, []);

  return <Component key={router.asPath} {...pageProps} />;
}

export default MyApp;
