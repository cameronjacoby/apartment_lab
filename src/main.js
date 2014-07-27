var Person = require('./people/person'),
  Manager = require('./people/manager'),
  Tenant = require('./people/tenant');

var Property = require('./property_types/property'),
  ApartmentBuilding = require('./property_types/apartment_building'), 
  Duplex = require('./property_types/duplex'),
  TownHouse = require('./property_types/town_house');

var Unit = require('./unit');

// start apartment module to export later
var App = {};

// add types of people to module
App.Person = Person;
App.Manager = Manager;
App.Tenant = Tenant;

// add property types to module
App.Property = Property;
App.Duplex = Duplex;
App.TownHouse = TownHouse;
App.ApartmentBuilding = ApartmentBuilding;

// add unit to module
App.Unit = Unit;


module.exports = App;