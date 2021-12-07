import { SessionProvider } from "next-auth/react";
import { StyledGlobale } from "../styles/StyledGlobale";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StyledGlobale />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
