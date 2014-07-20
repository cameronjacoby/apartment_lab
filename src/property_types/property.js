// require the Unit constructor
var Unit = require('./../unit.js');

// Property constructor
function Property(address) {
  this.address = address;
  this.units = [];
}

// Property sets manager
Property.prototype.setManager = function(person) {
  this.manager = person;
};

// Property returns manager
Property.prototype.getManager = function() {
  return this.manager;
};

// Property has the ability to add units
Property.prototype.addUnit = function(unit) {
  this.units.push(unit);
};

// Property has the ability to add tenants
Property.prototype.addTenant = function(unit, newTenant) {
  if (unit.available() && this.manager !== null && newTenant.references.length >= 2) {
    unit.tenant = newTenant;
  }
};

// Property has the ability to remove tenants
Property.prototype.removeTenant = function(unit, tenantLeaving) {
  if (unit.tenant === tenantLeaving) {
    unit.tenant = null;
  }
};

// Property returns number of available units
Property.prototype.availableUnits = function() {
  var availUnits = 0;
  for (var i = 0; i < this.units.length; i += 1) {
    if (this.units[i].available()) {
      availUnits += 1;
    }
  }
  return availUnits;
};

// Property returns the number of rented units
Property.prototype.rentedUnits = function() {
  var rentUnits = 0;
  for (var i = 0; i < this.units.length; i += 1) {
    if (!(this.units[i].available())) {
      rentUnits += 1;
    }
  }
  return rentUnits;
};

// exports the Property constructor
module.exports = Property;







