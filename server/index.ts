import * as http from 'http'
import app from './src/App'

const port = process.env.SERVER_PORT || process.env.PORT || 3000
app.set('port', port)

const server = http.createServer(app)

server.listen(port, err => {
  if (err) return console.error(err)
  console.log(`Server is listening on ${port}`)
})
