import * as path from 'path'
import * as express from 'express'

import { usersRouter } from './Users'

class App {
    public handler
    
     constructor() {
         this.handler = express()
         this.mountRoutes()
     }
     
     private mountRoutes(): void {
         this.handler.use('/', express.static(path.join(__dirname, '../public')))
         this.handler.use('/users', usersRouter)
     }
}

export default new App().handler
