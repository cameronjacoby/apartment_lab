var Person = require('./person'),
    inherit = require('../inherit');

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

module.exports = Tenant;