import express from 'express'
import 'dotenv/config'

async function main() {
  const app = express()

  app.use(express.json())

  app.get('/', (req, res) => {
    res.send('Ok')
  })

  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log('listening on port', port)
  })
}

main()
