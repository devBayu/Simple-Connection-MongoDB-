import { MongoClient } from 'mongodb'

let mongodb

const conns = {
    createMongoConnection(callback) {
        const host = process.env.MONGO_HOST || 'localhost';
        const port = process.env.MONGO_PORT || '27017';
        const dbs = process.env.MONGO_DBS || 'enigma-db';
        const client = MongoClient(`mongodb://${host}:${port}`);
        client.connect(function (err) {
            console.log('Connected successfully to server')
            mongodb = client.db(dbs)
            callback(err)
        })
    },
    getDb() {
        return mongodb
    }
}

export default conns