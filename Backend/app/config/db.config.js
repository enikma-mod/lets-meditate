// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'meditationapp',
//   password: '12345',
//   port: 5432,
// });

// module.exports = pool;


module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  //DA PASSWORD
  PASSWORD: 'Letsdoit!', 

  //Personal PC PASSWORD
  // PASSWORD: '12345', 

  //PERSONAL PGADMIN DATABASE
  // DB: 'meditationapp',

  //DA SHELL DATABASE
  DB: 'meditationsapp', 


  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
