const adapter = require('./adapter')

module.exports = {
  id: 'adapter-name',
  port: 'port-name',
  load: () => ({}), // load env
  link: env => _ => adapter(env) // link adapter
}