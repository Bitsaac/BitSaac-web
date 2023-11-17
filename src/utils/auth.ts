import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const user = {
  id: "1",
  name: "Admin",
  username: "Admin",
  password: "Bitsaac",
};
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "username",
          placeholder: "Admin",
          autoComplete: "off",
        },
        password: {
          label: "Password",
          type: "password",

          // pattern: "1Password",
          title: "Password must be 1Password",
        },
      },
      async authorize(credentials) {
        if (
          credentials?.username !== user.username ||
          credentials?.password !== user.password
        ) {
          return null;
        }
        return user;
      },
    }),
  ],
};
