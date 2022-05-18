const express = require('express')
const routes = express.Router()

let db = [
    { '1': { Nome: 'Client 1', Idade: '20'} },
    { '2': { Nome: 'Client 2', Idade: '20'} },
    { '3': { Nome: 'Client 3', Idade: '20'} }
]
// Buscar dados.
routes.get('/', (req,res) => {
    return res.json(db)
})
// Inserir dados.
routes.post('/add', (req,res) => {
    const body = req.body


    if(!body) 
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})
// Deletar dados 
routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })
    db = newDB
    return res.send(newDB)
})

module.exports = routes