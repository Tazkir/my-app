import "../styles/globals.css";
import Ga from "../components/Ga";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Ga />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
