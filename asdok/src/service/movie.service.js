import conns from '../database/connection'
import { ObjectID } from 'mongodb'

class MovieService {

    movieRepository() {
        const collection = conns.getDb().collection('movie');
        return collection;
    }

    async findById(id) {
        let docs = await this.movieRepository().findOne({ id: new ObjectID(id) })
        let result = await docs
        return result
    }

    async findAll() {
        let docs = await this.movieRepository().find({})
        let result = await docs.toArray()
        return result
    }

    async insert(data) {
        let result = await this.movieRepository().insertMany(data)
        return result
    }

    async updateOne(id, data) {
        let result = await this.movieRepository().updateOne({ _id: new ObjectID(id) }, { $set: data })
        return result
    }

    async findAllPaging(numOfItems, pageNum) {
        let docs = await this.movieRepository().find({}).skip(numOfItems * (pageNum - 1)).limit(Number(numOfItems))
        let result = await docs.toArray()
        return result
    }
}
export default MovieService