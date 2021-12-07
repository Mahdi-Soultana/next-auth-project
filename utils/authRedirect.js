import { getSession } from "next-auth/react";
export async function protectPage(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
/////////////////////////
export async function checkAuthWithRedirect(ctx, url) {
  const session = await getSession(ctx);
  if (session) {
    return {
      session,
      redirect: {
        destination: url || "welcome",
        permanent: false,
      },
    };
  }
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}

/////////////////////////
export async function userAuthenticated(ctx) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/welcome",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
