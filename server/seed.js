import fs from 'node:fs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))

async function main() {
  await prisma.product.deleteMany()
  await prisma.product.createMany({
    data: products,
  })
  await prisma.$disconnect()
}

main()
