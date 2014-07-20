var expect = require('chai').expect,
	TownHouse = require('./../../src/property_types/town_house.js'),
  Property = require('./../../src/property_types/property.js'),
  Manager = require('./../../src/people/manager.js');
  Tenant = require('./../../src/people/tenant.js');
  Person = require('./../../src/people/person.js');

describe('TownHouse', function(){
	var wrightson = new TownHouse('223 Wrightson Ave', 2000, '$6500');
    bob = new Manager('Bob Smith', '555-555-555');
    cameron = new Tenant('Cameron Jacoby', '555-555-555'),
    phoebe = new Person('Phoebe Miller', '555-5555'),
    robert = new Person('Robert Jacoby', '555-5555');

  it ('should have an address', function() {
    expect(wrightson.address).to.eql('223 Wrightson Ave');
  });

  it ('should have square footage', function() {
    expect(wrightson.sqft).to.eql(2000);
  });

  it ('should have rent', function() {
    expect(wrightson.rent).to.eql('$6500');
  });

  it ('should initially have tenant set to null', function() {
    expect(wrightson.tenant).to.eql(null);
  });

  describe('#setManager', function() {
    it ('should set the manager', function() {
      wrightson.setManager(bob);
      expect(wrightson.manager).to.eql(bob);
    });
  });

  describe('#getManager', function() {
    it ('should return the manager', function() {
      expect(wrightson.getManager()).to.eql(bob);
    });
  });

  describe('#available', function() {
    it ('should return true if the town house is available', function() {
      expect(wrightson.available()).to.eql(true);
    });
  });

  describe('#addTenant', function() {
    it ('should add a new tenant to the town house', function() {
      cameron.addReference(phoebe);
      cameron.addReference(robert);
      wrightson.addTenant(cameron);
      expect(wrightson.tenant).to.eql(cameron);
    });
  });

  describe('#removeTenant', function() {
    it ('should remove an existing tenant from the town house', function() {
      wrightson.removeTenant(cameron);
      expect(wrightson.tenant).to.eql(null);
    });
  });
});









