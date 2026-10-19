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

const clients = [
    { id: 1, nom: "Premier client" },
    { id: 2, nom: "Deuxième client" }
]

app.get('/', (req, res) => {
    res.send('Hello from the front, Ilias El Guennouni')
})

app.get('/login', (req, res) => {
    res.send('Bienvenue sur la route login')
})

app.get('/sign-up', (req, res) => {
    res.send('Bienvenue sur la route sign up')
})

app.get('/api/clients', (req, res) => {
    res.json(clients)
})

app.get('/api/test', (req, res) => {
    res.json({ message: "Connexion Front-Back réussie" })
})

app.listen(port, () => {
    console.log("serveur tourne bien au " + port)
})
