import argon from 'argon2'
import { NextAuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { db } from '@/lib/prisma'

export const authOpts: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'james@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const user = await db.user.findUnique({
          where: { email },
        })

        if (!user) {
          throw new Error('No user found')
        }

        const isValid = await argon.verify(user.password, password)
        if (!isValid) {
          throw new Error('Invalid password')
        }

        return user
      },
    }),
  ],

  pages: {
    signIn: '/auth/sign-in',
  },

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
      }

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }

      return token
    },
  },
}

export const getAuthSession = () => getServerSession(authOpts)
