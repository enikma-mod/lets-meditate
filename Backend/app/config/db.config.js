//HOSTED DATABASE - RENDER
module.exports = {
  HOST: 'dpg-ci26o5jhp8u1a18ua9e0-a.oregon-postgres.render.com',
  USER: 'meditationapp_user',
  PASSWORD: 'S0v3mJBPHUbionJjUibv2lP4b8hEhl9g',
  DB: 'meditationapp',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};



//LOCAL DA & 
// module.exports = {
  // HOST: 'localhost',
  // USER: 'postgres',
  //DA PASSWORD
  // PASSWORD: 'Letsdoit!', 

  //Personal PC PASSWORD
  // PASSWORD: '12345', 

  //PERSONAL PGADMIN DATABASE
  // DB: 'meditationapp',

  //DA SHELL DATABASE
  // DB: 'meditationsapp', 


  // port: 5432,
  // dialect: 'postgres',
  // pool: {
  //   max: 15,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
// };
