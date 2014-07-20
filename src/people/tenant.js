// require the Person constructor and the inherit function
var Person = require('./person.js'),
    inherit = require('./../inherit.js');

// Tenant constructor
function Tenant(name, contact) {
  Person.call(this, name, contact);
  this.references = [];
};

// Tenant inherits from Person
inherit(Tenant, Person);

// Tenant has the ability to add references
Tenant.prototype.addReference = function(reference) {
  this.references.push(reference);
};

// exports the Tenant constructor
module.exports = Tenant;