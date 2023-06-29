const fs = require('fs')
const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

const products = JSON.parse(
  fs.readFileSync('./seeder/data/products.json', 'utf8')
)

async function main() {
  await db.cartItem.deleteMany({})
  await db.order.deleteMany({})

  await db.product.deleteMany({})
  await db.product.createMany({
    data: products.map((p) => {
      return {
        name: p.name,
        image: p.image,
        category: p.category,
        price: p.price,
      }
    }),
  })

  console.log('Data imported!')
  db.$disconnect()
  process.exit()
}

main()
