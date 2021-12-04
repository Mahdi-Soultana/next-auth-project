import { StyledGlobale } from "../styles/StyledGlobale";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledGlobale />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
