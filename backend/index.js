const express = require('express')
const app = express()

const cors = require('cors')
const conn = require('./db/conn')

const PORT = 3000 // porta TCP
const hostname = 'locahost' // endereço IP = 127.0.0.1, ou seja, localhost = 127.0.0.1

const usuarioController = require('./controller/usuario.controller')

// --------- Middleware ----------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// -------------------------------


app.post('/usario', usuarioController.cadastrar)

app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!'})
})

// ---------- Server -------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro ao sincronizar com o Banco de dados!',err)
})