var Person = require('./person'),
    Property = require('../property_types/property'),
    inherit = require('../inherit');

// Manager constructor
function Manager(name, contact) {
  Person.call(this, name, contact);
  this.properties = [];
}

// Manager inherits from Person
inherit(Manager, Person);

// Manager has the ability to add properties
Manager.prototype.addProperty = function(property) {
  // first check if property is an INSTANCE of PROPERTY
  if (property instanceof Property) {
    this.properties.push(property);
  }
  else {
    console.error('Failed to add property:', property);
  }
};

// Manager has the ability to remove properties
Manager.prototype.removeProperty = function(property) {
  var propertyIndex = this.properties.indexOf(property);
  this.properties.splice(propertyIndex, 1);
};

module.exports = Manager;