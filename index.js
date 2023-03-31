(async()=>{

  const database = require('./db');
  const Dados = require('./dados');
  await database.sync();

  //// EX6!!!
  // await Dados.destroy({ where: { id: 19 }});

  //// EX5!!!
  // await Dados.update({
  //   nome: 'Ana Clara',
  //   email: 'ana.clara@example.com',
  // }, { where: { id: 17 }});

  /// EX4!!!
  // await Dados.create({
  //   nome: 'João Silva',
  //   email: 'joao.silva@example.com',  
  // })

  // await Dados.create({
  //   nome: 'Maria Santos',
  //   email: 'maria.santos@example.com',
  // });
  
  // await Dados.create({
  //   nome: 'Karina Oliveira',
  //   email: 'ka.oliveira@example.com',
  // });
  
  // await Dados.create({
  //   nome: 'Ana Souza',
  //   email: 'ana.souza@example.com',
  // });

  const dados = await Dados.findAll();

  console.log(dados);

})();