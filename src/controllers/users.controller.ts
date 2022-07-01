import { myDataSource } from './../app-data-source'
import { Request, Response } from 'express'
import { User } from './../entity/User.entity'

async function get(req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find()
    res.json(users)
}

async function getById(req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    })
    return res.send(results)
}

async function post(req: Request, res: Response, next) {
    try {
        const user = await myDataSource.getRepository(User).create(req.body)
        const results = await myDataSource.getRepository(User).save(user)
        return res.send(results)
    } catch (err) {
        next(err)
    }
}

async function putById(req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: parseInt(req.params.id),
    })
    myDataSource.getRepository(User).merge(user, req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
}

async function deleteById(req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
}

export const usersController = {
    get,
    getById,
    post,
    putById,
    deleteById,
}
