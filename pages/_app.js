import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";
import UserPorvider from "../hooks/userProvider";
import { StyledGlobale } from "../styles/StyledGlobale";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const client = new QueryClient();
  return (
    <SessionProvider session={session}>
      <NextNProgress
        color="#00f7ff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <QueryClientProvider client={client}>
        <UserPorvider>
          <StyledGlobale />
          <Component {...pageProps} />
        </UserPorvider>
        <ReactQueryDevtoolsPanel />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
// toast.success("Well Done !", {
//   icon: "👌",
// });
