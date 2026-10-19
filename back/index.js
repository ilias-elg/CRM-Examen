import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { MongoClient } from 'mongodb'
dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(import.meta.dirname, "../front")))

const client = new MongoClient(process.env.MONGODB_URI)
client.connect()
    .then(() => console.log("Connecté à MongoDB"))
    .catch((err) => console.error("Erreur de connexion à MongoDB :", err.message))

const clients = [
    { id: 1, nom: "Premier client" },
    { id: 2, nom: "Deuxième client" }
]

app.get('/api/clients', (req, res) => {
    res.json(clients)
})

app.listen(port, () => {
    console.log("serveur tourne bien au " + port)
})
