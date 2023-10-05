import User from "@/database/models/user";
import { ConnectMongoDB } from "@/database/mongodb";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, }) {
      if (account.provider === "google") {
        try {
          await ConnectMongoDB()

          const isUserExist = await User.findOne({ email: user.email });
          if (!isUserExist) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: 'POST',
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                name: user.name,
                email: user.email,
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log("catch error: ", error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
