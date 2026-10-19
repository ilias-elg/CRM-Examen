fetch("https://crm-examen-ochre.vercel.app/api/clients")
    .then(res => res.json())
    .then(clients => {
        clients.forEach(client => {
            const p = document.createElement("p")
            p.textContent = client.nom
            document.body.appendChild(p)
        })
    })

fetch("https://crm-examen-ochre.vercel.app/api/test")
    .then(res => res.json())
    .then(data => {
        const p = document.createElement("p")
        p.textContent = data.message
        document.body.appendChild(p)
    })
