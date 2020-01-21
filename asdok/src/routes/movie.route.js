import MovieService from '../service/movie.service'
import { Router } from 'express'

const movieService = new MovieService()
const MovieRouter = Router()
    .get('/', async (req, res) => {
        try {
            let data;
            const numItems = req.query.numItems;
            const pageNumber = req.query.pageNumber;
            if (numItems && pageNumber) {
                data = await movieService.findAllPaging(numItems, pageNumber)
            } else {
                data = await movieService.findAll()
            }
            console.log(data);
            res.json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }).get('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const data = await movieService.findById(id)
            console.log(data);
            res.json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }).post('/', async (req, res) => {
        try {
            let newData = [
                { name: 'blackedraw' }, { name: 'tushy' }, { name: 'vixen' }
            ]
            const data = await movieService.insert(newData)
            res.json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }).put('/:id', async (req, res) => {
        try {
            const { id } = req.params;
            let newData = { name: 'blacked raw' }
            const data = await movieService.updateOne(id, newData)
            res.json(data)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    })
export default MovieRouter