import NextAuth from 'next-auth'
import { authOpts } from '@/lib/next-auth'

const handler = NextAuth(authOpts)

export { handler as POST, handler as GET }
