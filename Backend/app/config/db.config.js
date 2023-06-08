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
  PASSWORD: 'Letsdoit!',
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
