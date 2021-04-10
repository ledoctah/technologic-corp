import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '../styles/global.scss';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
