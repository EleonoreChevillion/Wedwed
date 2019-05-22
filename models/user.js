module.exports = function(sequelize, Datatypes) {
  var Guests = sequelize.define("Guest", {
    name: Datatypes.STRING
  });
  return Guests;
};
