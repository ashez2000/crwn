import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';

import * as userRepo from '../../../db/repo/user.repo';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt(token, user) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token.id) session.user.id = token.id;
      return session;
    },
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await userRepo.findUserByEmail(credentials.email);
        if (!user) {
          throw new Error('Invalid credentials');
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error('Invalid credentials');
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
});
