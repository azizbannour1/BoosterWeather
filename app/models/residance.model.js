module.exports = (sequelize, Sequelize) => {
  const Residance = sequelize.define("residance", {
    name: {
      type: Sequelize.STRING
    },
    bedTime: {
      type: Sequelize.STRING
    },

  });

  return Residance;
};
