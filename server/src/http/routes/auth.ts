import { Router, Response } from 'express'
import bcrypt from 'bcryptjs'

import prisma from '../../lib/prisma.js'
import { decoded, generateAccessToken, generateTokens } from '../../lib/jwt.js'
import redis from '../../lib/redis.js'

const routes = Router()

// route: POST /auth/signup
routes.post('/signup', async (req, res) => {
  // TODO: validation
  const { name, email, password, role } = req.body

  const emailTaken = await findUserByEmail(email)
  if (emailTaken) {
    return res.status(400).json({
      message: 'email already exist',
    })
  }

  const hash = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: { name, email, password: hash, role },
  })

  sendAuthResponse(res, user)
})

// route: POST /auth/signin
routes.post('/signin', async (req, res) => {
  // TODO: validation
  const { email, password } = req.body

  const user = await findUserByEmail(email)
  if (!user) {
    return res.status(401).json({
      message: 'invalid credentials',
    })
  }

  const isMatch = bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(401).json({
      message: 'invalid credentials',
    })
  }

  sendAuthResponse(res, user)
})

// route: POST /auth/signout
routes.post('/signout', async (req, res) => {
  const refreshToken = req.cookies.refreshToken
  if (refreshToken) {
    const payload = decoded(refreshToken)!
    await redis.del(`refresh_token:${payload.id}`)
  }

  res.clearCookie('accessToken')
  res.clearCookie('refreshToken')
  res.status(200).json({})
})

/**
 * Generates new refresh token
 * @rotue POST /auth/refresh-token
 */
routes.post('/refresh-token', async (req, res) => {
  const refreshToken = req.cookies.refreshToken
  if (!refreshToken) {
    return res.status(401).json({ message: 'unauthoized' })
  }

  const payload = decoded(refreshToken)
  const storedToken = redis.get(`refresh_token:${payload.id}`)
  if (storedToken !== refreshToken) {
    return res.status(401).json({ message: 'unauthoized' })
  }

  const accessToken = generateAccessToken(payload.id)
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 16 * 60 * 1000, // 15 minutes
    secure: process.env.NODE_ENV == 'production',
  })

  res.status(200).json({})
})

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  })
}

function setCookies(
  res: Response,
  tokens: {
    accessToken: string
    refreshToken: string
  }
) {
  res.cookie('accessToken', tokens.accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 16 * 60 * 1000, // 15 minutes
    secure: process.env.NODE_ENV == 'production',
  })

  res.cookie('refreshToken', tokens.refreshToken, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    secure: process.env.NODE_ENV == 'production',
  })
}

/** sendAuthResponse generates tokens, sets cookies and sends response with user data */
function sendAuthResponse(
  res: Response,
  user: {
    id: string
    name: string
    email: string
  }
) {
  const { id, name, email } = user
  const tokens = generateTokens(id)

  storeRefreshToken(id, tokens.refreshToken)
  setCookies(res, tokens)
  res.status(200).json({
    id,
    name,
    email,
  })
}

/** storeRefreshToken stores refresh token on redis */
async function storeRefreshToken(userId: string, refreshToken: string) {
  await redis.set(`refresh_token:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60 * 1000)
}

export default routes
