require("dotenv").config();
const http = require("http");
const { MongoClient } = require("mongodb");

const PORT = 3000;

const client = new MongoClient(process.env.MONGODB_URI);

client.connect()
    .then(() => console.log("Connecté à MongoDB"))
    .catch((err) => console.error("Erreur de connexion à MongoDB :", err.message));

const server = http.createServer((req, res) => {
    res.end("Serveur CRM");
});

server.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
