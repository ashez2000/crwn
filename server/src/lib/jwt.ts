import jwt from 'jsonwebtoken'
import loadenv from './loadenv.js'

const accessTokenSecret = loadenv('ACCESS_TOKEN_SECRET')
const refreshTokenSecret = loadenv('REFRESH_TOKEN_SECRET')

export function generateTokens(userId: string) {
  const accessToken = generateAccessToken(userId)
  const refreshToken = jwt.sign({ userId }, refreshTokenSecret, { expiresIn: '7d' })

  return {
    accessToken,
    refreshToken,
  }
}

export function decoded(token: string) {
  return jwt.decode(token) as { id: string }
}

export function generateAccessToken(userId: string) {
  return jwt.sign({ userId }, accessTokenSecret, { expiresIn: '15m' })
}
