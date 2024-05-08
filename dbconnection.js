const sequelize = require('sequelize');

const connection = new sequelize("aula 07-05", "root", "root", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  define: {
    timestamps: false, // para não utilizar campos created_at e updated_at
    freezeTableName: true // para não adicionar o "s" no nome das tabelas
  }
});

connection.authenticate().then(() => {
    console.log('Conexão estabelecida com o banco de dados.');
  }).catch((error) => {
  console.error('Erro ao conectar com o banco de dados:', error);
  });

  module.exports = connection

