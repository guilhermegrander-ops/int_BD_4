const { Produto, Usuario } = require('./models/rel')

const conn = require('./db/conn')

async function syncDatabase() {
    try{
        await conn.sync({force: true})
        console.log('Banco de dados Sincronizado com Sucesso!')
    }catch(err){
        console.error('Erro ao sincronizar o Banco de Dados!',err)
    }finally{
        conn.close()
        console.log('Fechando a conexão com o Banco de dados!')
    }
}
syncDatabase()

// Pode ir direto para a colinha do Carlos.