import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import LinkedInProvider from "next-auth/providers/linkedin";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import User from "../../../db/model/User";
import connectDb from "../../../db/connectDb";
export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorizationUrl: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=&state=a_random_string_that_is_really_difficult_and_random_2341344&scope=r_liteprofile%20r_emailaddress`,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
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
        req.user = user;
        let {
          email,
          avatar: { url: image },
        } = user;
        return { email, image };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      token.any_property = "ANY_PROPERTY in [...nextauth] callbacks jwt !!  ";

      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.any_property = token.any_property;
      session.user.token = token.jti;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
