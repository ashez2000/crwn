import { Router } from 'express'
import prisma from '../../lib/prisma.js'

const routes = Router()

routes.get('/', async (req, res) => {
  const products = await prisma.product.findMany()
  res.status(200).json(products)
})

export default routes
