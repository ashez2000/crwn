import fs from 'node:fs'
import { PrismaClient } from '@prisma/client'

const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))

const prisma = new PrismaClient()

async function cleanDb() {
  await prisma.product.deleteMany()
}

async function main() {
  await cleanDb()

  for (let p of products) {
    await prisma.product.create({ data: p })
  }

  await prisma.$disconnect()
}

main()
