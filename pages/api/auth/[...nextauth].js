import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Igor" },
        email: { label: "email", type: "email" },
      },
      async authorize(credentials) {
       
        const user = { name: "Ivan", email: "test@gmail.com" };

        if (user.email === credentials.email) {
         
          return user;
        } else {
       return null

         
        }
      },
    }),
  ],
});
