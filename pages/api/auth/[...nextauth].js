import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.sub, // 'sub' is the unique identifier in Google profile
          email: profile.email,
          name: profile.name,
          userName: profile.email.split("@")[0], // Using the email as a username (modify as needed)
          googleId: profile.sub, // Assuming Google provides a unique ID
          admin: false,
          clubName: undefined,
        };
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    async session({ session, user, token }) {
      if (session?.user) {
        session.user.id = user.id;
        session.user.googleId = user.googleId;
        session.user.email = user.email;
        session.user.admin = user.admin;
        session.user.clubName = user.clubName;
      }
      return session;
    },
  },

  secret: process.env.JWT_SECRET,
});
