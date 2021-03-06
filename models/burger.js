module.exports = (sequelize, DataTypes) => {
  var Burger = sequelize.define('Burgers', {
    burger_name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue: false
    }
  })

  return Burger;
}