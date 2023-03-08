import { useRouter } from 'next/router';

import '../styles/tailwind.css';
import '../styles/slick.css';

// import {analytics} from '../../firebase';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   if (process?.env?.NODE_ENV === 'production') {
  //     analytics();
  //   }
  // }, []);

  return <Component key={router.asPath} {...pageProps} />;
}

export default MyApp;
