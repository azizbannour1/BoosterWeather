module.exports = (sequelize, Sequelize) => {
  const Setting = sequelize.define("setting", {
    capacity: {
      type: Sequelize.INTEGER
    },


  });

  return Setting;
};
