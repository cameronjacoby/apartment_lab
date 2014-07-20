// require the Property constructor and the inherit function
var Property = require('./property.js'),
    inherit = require('./../inherit.js');

// TownHouse constructor
function TownHouse(address, sqft, rent) {
  this.address = address;
  this.sqft = sqft;
  this.rent = rent;
  this.tenant = null;
};

// TownHouse inherits from Property
inherit(TownHouse, Property);

// returns true if town house is available
TownHouse.prototype.available = function() {
  if (this.tenant === null) {
    return true;
  }
  else {
    return false;
  }
};

// TownHouse has the ability to add tenants
TownHouse.prototype.addTenant = function(newTenant) {
  if (this.available() && this.manager !== null && newTenant.references.length >= 2) {
    this.tenant = newTenant;
  }
};

// TownHouse has the ability to remove tenants
TownHouse.prototype.removeTenant = function(tenantLeaving) {
  if (this.tenant === tenantLeaving) {
    this.tenant = null;
  }
};

// exports the TownHouse constructor
module.exports = TownHouse;








