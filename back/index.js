import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.MONGODB_URI)
client.connect()
    .then(() => console.log("Connecté à MongoDB"))
    .catch((err) => console.error("Erreur de connexion à MongoDB :", err.message))

app.get('/', (req, res) => {
    res.send('Mon premier backend marche !')
})

app.listen(port, () => {
    console.log("serveur tourne bien au " + port)
})
