import { Router } from 'express'
import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
const routes = new Router()

routes.post('/users', UserController.create)
routes.post('/session', SessionController.create)

export default routes
