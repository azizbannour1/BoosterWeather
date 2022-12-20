module.exports = (sequelize, Sequelize) => {
  const Condition = sequelize.define("conditions", {
    name: {
      type: Sequelize.STRING
    },
    interval: {
      type: Sequelize.STRING
    },
    percentage: {
      type: Sequelize.DOUBLE
    }

  });

  return Condition;
};
