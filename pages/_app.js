import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
import UserPorvider from "../hooks/userProvider";
import { StyledGlobale } from "../styles/StyledGlobale";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={session}>
        <UserPorvider>
          <StyledGlobale />
          <Component {...pageProps} />
        </UserPorvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
// toast.success("Well Done !", {
//   icon: "👌",
// });
