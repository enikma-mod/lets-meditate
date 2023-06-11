module.exports = (sequelize, Sequelize) => {
    //title, description, duration_minutes, image_url
    const Meditation = sequelize.define("meditation", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      sounds: {
        type: Sequelize.STRING
      },
      quotes: {
        type: Sequelize.STRING

      }
    });
  
    return Meditation;
  };