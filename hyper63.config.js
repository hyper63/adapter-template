const myAdapter = require('./index')

module.exports = {
  app: express,
  adapters: [
    { port: 'data', plugins: [myAdapter()] }
  ]
}