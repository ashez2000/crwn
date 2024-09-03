import { Router } from 'express'
import bcrypt from 'bcryptjs'

import prisma from '../../lib/prisma.js'

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

  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
  })
})

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  })
}

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

  res.status(200).json({
    id: user.id,
    name: user.name,
    email: user.email,
  })
})

// route: POST /auth/signout
routes.post('/signout', async (req, res) => {
  res.status(200).json({})
})

export default routes
