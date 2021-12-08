import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../db/model/User";
import connectDb from "../../../db/connectDb";
export default NextAuth({
  session: {
    jwt: true,
    secret: process.env.JWT_SECRET,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectDb();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("email not found !");
        }
        if (user.password.toString() !== credentials.password.toString()) {
          throw new Error("wrong password !");
        }
        return user;
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
