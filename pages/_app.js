import '../styles/globals.css';
import ReactGa from 'react-ga';
import { useEffect } from 'react';
import Ga from '../components/Ga';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GA_ID);

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Ga />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
