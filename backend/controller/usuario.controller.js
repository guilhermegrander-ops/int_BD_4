const Usuario = require('../models/Usuario')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    if(!valores.nome || !valores.email || !valores.senha){
        return res.status(400).json({message: 'Todos os campos são Obrigatórios!'})
    }

    try{
        await Usuario.create(valores)
        res.status(200).json({message: 'Usuário cadastrado com sucesso!'})
    }catch(err){
        console.error('Erro ao cadastrar o Usuario',err)
        res.status(500).json({message: 'Erro ao cadastrar o Usuario'})
    }
}
const consultar = async (req,res)=>{
    const id = req.params.id
    console.log('Código do Usuário = ',id)

    if(!id){
        return res.status(400).json({message: 'O código do usuário é Obrigatórios!'})
    }
    try {
        const usuario = await Usuario.findByPk({where: {codUsuario: id}})
        
        if(!usuario){
            return res.status(404).json({message: 'Usuário não encontrado'})
        }

        res.status(200).json(usuario)
    } catch (err) {
        console.error('Erro ao consultar o usuário!',err)
        res.status(500).json({message: 'Erro ao consultar o usuário!'})
    }
}
const listar = async (req,res)=>{

}
// const atualizar = async (req,res)=>{

// }
// const apagar = async (req,res)=>{

// }



module.exports = { cadastrar, consultar }