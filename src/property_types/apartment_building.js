var Property = require('./property'),
    inherit = require('../inherit');

// ApartmentBuilding constructor
function ApartmentBuilding(name, address) {
	this.name = name;
  this.address = address;
  this.units = [];
}

// ApartmentBuilding inherits from Property
inherit(ApartmentBuilding, Property);

module.exports = ApartmentBuilding;