var Property = require('./property'),
    inherit = require('../inherit');

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

module.exports = Duplex;