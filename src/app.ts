import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { User } from './entity/User.entity'
import { myDataSource } from './app-data-source'
import usersRouter from './routes/users.route'
import auctionsRouter from './routes/auctions.route'

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!')
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err)
    })

// create and setup express app
const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.use('/users', usersRouter)
app.use('/auctions', auctionsRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({ message: err.message })

    return
})

// start express server
app.listen(3000)
