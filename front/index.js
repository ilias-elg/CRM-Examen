fetch("/api/clients")
    .then(res => res.json())
    .then(clients => {
        clients.forEach(client => {
            const p = document.createElement("p")
            p.textContent = client.nom
            document.body.appendChild(p)
        })
    })
