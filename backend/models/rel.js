const Usuario = require('./Usuario')
const Produto = require('./Produto')

Usuario.hasMany(Produto,{
    foreignKey: 'idUsuario',
    as: 'produtosUsuario',
    onDelete: 'CASCADE'
})
Produto.belongsTo(Usuario,{
    foreignKey: 'idUsuario',
    as: 'usuarioProduto',
    allowNull: false
})

module.exports = { Usuario, Produto}