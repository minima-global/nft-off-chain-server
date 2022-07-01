import { Router } from 'express'
import { auctionsController } from '../controllers/auctions.controller'

const auctionsRouter = Router()

auctionsRouter.get('/', auctionsController.get)

auctionsRouter.get('/:id', auctionsController.getById)

auctionsRouter.post('/', auctionsController.post)

auctionsRouter.put('/:id', auctionsController.putById)

auctionsRouter.delete('/:id', auctionsController.deleteById)

export default auctionsRouter
