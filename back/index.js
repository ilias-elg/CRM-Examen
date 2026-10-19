const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("Serveur CRM");
});

server.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
