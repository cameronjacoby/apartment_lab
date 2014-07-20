// require the Property constructor and the inherit function
var Property = require('./property.js'),
    inherit = require('./../inherit.js');

// Duplex constructor
function Duplex(address, one, two) {
  this.address = address;
  this.units = [one, two];
}

// Duplex inherits from Property
inherit(Duplex, Property);

// Duplex can only have two units // cannot add more
Property.prototype.addUnit = function(unit) {
  return this.units;
};

// exports the Duplex constructor
module.exports = Duplex;