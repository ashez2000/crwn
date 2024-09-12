import express from 'express'
import cookieParser from 'cookie-parser'

import 'dotenv/config'

import * as routes from './http/routes/mod.js'

async function main() {
  const app = express()

  app.use(express.json())
  app.use(cookieParser())

  app.get('/', (req, res) => {
    res.send('Ok')
  })

  app.use('/auth', routes.auth)
  app.use('/products', routes.product)

  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log('listening on port', port)
  })
}

main()
