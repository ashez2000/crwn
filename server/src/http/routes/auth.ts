import { Router } from 'express'

const routes = Router()

routes.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body
  res.status(201).json({ message: 'signup user' })
})

routes.post('/signin', async (req, res) => {
  const { email, password } = req.body
  res.status(201).json({ message: 'signin user' })
})

routes.post('/signout', async (req, res) => {
  res.status(201).json({ message: 'signout user' })
})

export default routes
