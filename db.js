const Sequelize = require('sequelize');

const sequelize= new Sequelize('db_exercicios', 'postgres', '2207',{

  dialect: 'postgres',
  host:'localhost',
  port: '5432',

});

module.exports = sequelize;