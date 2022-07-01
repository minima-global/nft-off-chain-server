import { Router } from 'express'
import { usersController } from './../controllers/users.controller'

const usersRouter = Router()

usersRouter.get('/', usersController.get)

usersRouter.get('/:id', usersController.getById)

usersRouter.post('/', usersController.post)

usersRouter.put('/:id', usersController.putById)

usersRouter.delete('/:id', usersController.deleteById)

export default usersRouter
