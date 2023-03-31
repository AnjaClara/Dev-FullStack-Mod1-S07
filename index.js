(async()=>{

  const database = require('./db');
  const Dados = require('./dados');
  await database.sync();

  await Dados.create({
    nome: 'João Silva',
    email: 'joao.silva@example.com',  
  })

  await Dados.create({
    nome: 'Maria Santos',
    email: 'maria.santos@example.com',
  });
  
  await Dados.create({
    nome: 'Karina Oliveira',
    email: 'ka.oliveira@example.com',
  });
  
  await Dados.create({
    nome: 'Ana Souza',
    email: 'ana.souza@example.com',
  });

  const dados = await Dados.findAll();

  console.log(dados);

})();