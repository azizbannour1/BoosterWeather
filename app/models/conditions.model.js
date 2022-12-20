module.exports = (sequelize, Sequelize) => {
    const Residance = sequelize.define("conditions", {
      name: {
        type: Sequelize.STRING
      },
      interval: {
        type: Sequelize.DOUBLE
    
      },
      percentage: {
        type: Sequelize.DOUBLE
    
      }
  
    });
  
    return Residance;
  };
  