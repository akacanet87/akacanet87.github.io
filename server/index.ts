// import fs from 'fs'
import { createServer } from 'http'
import { parse } from 'url'

import cookieParser from 'cookie-parser'
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express'
// import path from 'path'
import next from 'next'

// const options = {
//   key: fs.readFileSync('/Users/jiho/Downloads/localhost-key.pem'),
//   cert: fs.readFileSync('/Users/jiho/Downloads/localhost.pem'),
// }

const port = parseInt(process.env.PORT || '9000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ?
        'development' :
        process.env.NODE_ENV
    }`,
  )

  const server = express()
  server.use(cookieParser())

  // eslint-disable-next-line @typescript-eslint/no-shadow
  server.all('/*', (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  })

  // server.get('/vitameeter/:id', (req, res) => {
  //   console.log('req', req)
  //   const page = '/vitameeter'
  //   const params = { id: req.params.id }
  //   app.render(req, res, page, params)
  // })
})
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
