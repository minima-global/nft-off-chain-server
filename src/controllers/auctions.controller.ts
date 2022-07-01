import { myDataSource } from '../app-data-source'
import { Request, Response } from 'express'
import { Auction } from '../entity/Auction.entity'

const auctionRepository = myDataSource.getRepository(Auction)

async function get(req: Request, res: Response) {
    const auctions = await auctionRepository.find()
    res.json(auctions)
}

async function getById(req: Request, res: Response) {
    const results = await auctionRepository.findOneBy({
        id: parseInt(req.params.id),
    })
    return res.send(results)
}

async function post(req: Request, res: Response, next) {
    try {
        const auction = await auctionRepository.create(req.body)
        const results = await auctionRepository.save(auction)
        return res.send(results)
    } catch (err) {
        next(err)
    }
}

async function putById(req: Request, res: Response) {
    const auction = await auctionRepository.findOneBy({
        id: parseInt(req.params.id),
    })
    myDataSource.getRepository(Auction).merge(auction, req.body)
    const results = await auctionRepository.save(auction)
    return res.send(results)
}

async function deleteById(req: Request, res: Response) {
    const results = await auctionRepository.delete(req.params.id)
    return res.send(results)
}

export const auctionsController = {
    get,
    getById,
    post,
    putById,
    deleteById,
}
