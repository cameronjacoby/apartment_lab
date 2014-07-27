var expect = require('chai').expect,
  Person = require('./../../src/people/person.js'),
  Manager = require('./../../src/people/manager.js'),
  Property = require('./../../src/property_types/property.js'),
  ApartmentBuilding = require('./../../src/property_types/apartment_building.js');

describe('Manager', function() {
	var bob = new Manager('Bob Smith', '555-555-555'),
      avalon = new Property('555 5th Street'),
      terraces = new ApartmentBuilding('Terraces', '66 7th Street');

  it ('should have a name', function() {
    expect(bob.name).to.eql('Bob Smith');
  });

  it ('should have contact info', function() {
    expect(bob.contact).to.eql('555-555-555');
  });

  it ('should initially have an empty properties array', function() {
  	expect(bob.properties).to.be.empty;
  });

  describe('#addProperty', function() {
    it ('should add new property', function() {
      bob.addProperty(avalon);
      expect(bob.properties).to.eql([avalon]);
    });
  });

  describe('#removeProperty', function() {
    it ('should remove the specified property', function() {
      bob.addProperty(terraces);
      bob.removeProperty(avalon);
      expect(bob.properties).to.eql([terraces]);
    });
  });
});




