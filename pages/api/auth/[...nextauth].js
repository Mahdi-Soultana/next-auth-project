import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
    secret: process.env.JWT_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.any_property = "ANY_PROPERTY HERER from callbacks jwt !!  ";

      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.any_property = token.any_property;
      session.user.token = token.jti;
      return session;
    },
  },
});
