import { Router, Response } from 'express'
import bcrypt from 'bcryptjs'

import prisma from '../../lib/prisma.js'
import { generateTokens } from '../../lib/jwt.js'

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
  const tokens = generateTokens(user.id)
  setCookies(res, tokens)
  res.status(200).json({
    id,
    name,
    email,
  })
}

export default routes
