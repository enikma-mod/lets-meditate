module.exports = (sequelize, Sequelize) => {
    //title, description, duration_minutes, image_url
    const Meditation = sequelize.define("meditation", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      duration_minutes: {
        type: Sequelize.INTEGER
      },
      image_url: {
        type: Sequelize.STRING
      }
    });
  
    return Meditation;
  };