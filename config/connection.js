var Sequelize = require('sequelize');

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize("burgers_db", "rgrhs98w2psm45ce", "f6kllq5iy61dfrnb", {
  host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

} else {
  var sequelize = new Sequelize("burgers_db", "root", "Balancer06", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}

module.exports = sequelize;  