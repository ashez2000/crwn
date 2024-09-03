import jwt from 'jsonwebtoken'
import loadenv from './loadenv.js'

const accessTokenSecret = loadenv('ACCESS_TOKEN_SECRET')
const refreshTokenSecret = loadenv('REFRESH_TOKEN_SECRET')

export function generateTokens(userId: string) {
  const accessToken = jwt.sign({ userId }, accessTokenSecret, { expiresIn: '15m' })
  const refreshToken = jwt.sign({ userId }, refreshTokenSecret, { expiresIn: '7d' })

  return {
    accessToken,
    refreshToken,
  }
}
