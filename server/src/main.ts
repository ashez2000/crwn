import express from 'express'
import 'dotenv/config'

import * as routes from './http/routes/mod.js'

async function main() {
  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Ok')
  })

  app.use('/auth', routes.auth)

  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log('listening on port', port)
  })
}

main()
