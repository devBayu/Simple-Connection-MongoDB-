import express from 'express'
import MovieRouter from './movie.route'

export default express.Router()
    .get('/', (req, res) => res.json({ message: 'Hello express!' }))
    .use('/movies', MovieRouter)
    .use((req, res, next) => {
        res.status(404).json({ message: 'Not Found' })
    })