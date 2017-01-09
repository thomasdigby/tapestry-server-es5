import { Server } from 'hapi'
import h2o2 from 'h2o2'
import Inert from 'inert'

export default class TapestryServer {

  constructor ({ config, cwd }) {
    console.log(config, cwd)
    // allow access from class
    this.config = config.default
    this.context = cwd
    // run server
    this.bootServer()
    this.startServer()
    // set routes
    this.routeStatic()
    this.routeDynamic()
  }

  bootServer () {
    // create new Hapi server and register required plugins
    this.server = new Server()
    this.server.register([h2o2, Inert])
    this.server.connection({
      host: '0.0.0.0',
      port: 3030
    })
  }
  startServer () {
    // run server
    this.server.start(err => {
      if (err) console.log(err)
      console.log(`🌎  Server running at: ${this.server.info.uri} 👍`)
    })
  }
  routeStatic () {
    this.server.route({
      method: 'GET',
      path: '/public/{param*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    })
  }
  routeDynamic () {
    this.server.route({
      method: 'GET',
      path: '/{path*}',
      handler: (request, reply) => {
        reply('<p>test</p><div id="root"></div><script src="public/bundle.js"></script>')
      }
    })
  }
}

console.log('./src/server.js')