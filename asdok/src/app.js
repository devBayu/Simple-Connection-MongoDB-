import AppRouter from './routes'
import express from 'express'
import conns from './database/connection'
import configure from './config'

configure()
const app = express()
app.use(AppRouter)
conns.createMongoConnection((err, client) => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`listening on port ${process.env.APP_PORT}`);
    })
})