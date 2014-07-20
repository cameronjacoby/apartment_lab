// require the Property constructor and the inherit function
var Property = require('./property.js'),
    inherit = require('./../inherit.js');

// ApartmentBuilding constructor
function ApartmentBuilding(name, address) {
	this.name = name;
  this.address = address;
  this.units = [];
}

// ApartmentBuilding inherits from Property
inherit(ApartmentBuilding, Property);

// exports the ApartmentBuilding constructor
module.exports = ApartmentBuilding;