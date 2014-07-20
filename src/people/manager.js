// require the Person constructor and the inherit function
var Person = require('./person.js'),
    inherit = require('./../inherit.js');

// Manager constructor
function Manager(name, contact) {
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

// Manager inherits from Person
inherit(Manager, Person);

// Manager has the ability to add properties
Manager.prototype.addProperty = function(property) {
  this.properties.push(property);
};

// Manager has the ability to remove properties
Manager.prototype.removeProperty = function(property) {
  var propertyIndex = this.properties.indexOf(property);
  this.properties.splice(propertyIndex, 1);
};

// exports the Manager constructor
module.exports = Manager;