const express = require('express')
const app = express()

const cors = require('cors')
const conn = require('./db/conn')

const PORT = 3000 // porta TCP
const hostname = 'localhost' // endereço IP = 127.0.0.1, ou seja, localhost = 127.0.0.1

const usuarioController = require('./controller/usuario.controller')

// --------- Middleware ----------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// -------------------------------

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuario/:id', usuarioController.consultar)
app.get('/usuario', usuarioController.listar)
app.delete('/usuario/:id', usuarioController.apagar)

app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!'})
})

// ---------- Server -------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro ao sincronizar com o Banco de dados!',err)
})