const server = require('./server')

const PORT = process.env.PORT || 3666

server.listen(PORT, function () {
  console.log('Server is listening on port', PORT)
})