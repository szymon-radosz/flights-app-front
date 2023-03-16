import { useRouter } from 'next/router';

import '../styles/tailwind.css';
import '../styles/slick.css';

import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return <Component key={router.asPath} {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
