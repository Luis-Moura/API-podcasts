import express from 'express'
import { filterPodcastsController, findAllPodcastsController } from './controller/podcast-controller'

const app = express()
app.use(express.json())

app.get('/podcasts', findAllPodcastsController)
app.get('/podcasts/filter', filterPodcastsController)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`💻 Servidor rodando no endereço http://localhost:${PORT}`)
})
