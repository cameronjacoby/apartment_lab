var expect = require('chai').expect,
  Property = require('./../../src/property_types/property.js'),
  Unit = require('./../../src/unit.js'),
  Manager = require('./../../src/people/manager.js'),
  Tenant = require('./../../src/people/tenant.js'),
  Person = require('./../../src/people/person.js');

describe('Property', function(){
	var avalon = new Property('555 5th Street');
    bob = new Manager('Bob Smith', '555-555-555'),
    unit1 = new Unit('one', avalon, 500, '$1500'),
    unit2 = new Unit('two', avalon, 500, '$1500'),
    unit3 = new Unit('three', avalon, 500, '$1500'),
    unit4 = new Unit('four', avalon, 500, '$1500'),
    jane = new Tenant('Jane Doe', '555-555-555'),
    jill = new Person('Jill Taylor', '555-5555'),
    catherine = new Person('Catherine Smith', '555-5555');

  it ('should have an address', function() {
    expect(avalon.address).to.eql('555 5th Street');
  });

  it ('should initially have an empty units array', function() {
  	expect(avalon.units).to.be.empty;
  });

  describe('#setManager', function() {
    it ('should set the manager', function() {
      avalon.setManager(bob);
      expect(avalon.manager).to.eql(bob);
    });
  });

  describe('#getManager', function() {
    it ('should return the manager', function() {
      expect(avalon.getManager()).to.eql(bob);
    });
  });

  describe('#addUnit', function() {
    it ('should add new units', function() {
      avalon.addUnit(unit1);
      avalon.addUnit(unit2);
      avalon.addUnit(unit3);
      avalon.addUnit(unit4);
      expect(avalon.units).to.eql([unit1, unit2, unit3, unit4]);
    });
  });

  describe('#addTenant', function() {
    it ('should add a new tenant to a unit', function() {
      jane.addReference(jill);
      jane.addReference(catherine);
      avalon.addTenant(unit1, jane);
      expect(unit1.tenant).to.eql(jane);
    });
  });

  describe('#removeTenant', function() {
    it ('should remove an existing tenant from a unit', function() {
      avalon.removeTenant(unit1, jane);
      expect(unit1.tenant).to.eql(null);
    });
  });

  describe('#availableUnits', function() {
    it ('should return the number of available units', function() {
      avalon.addTenant(unit1, jane);
      expect(avalon.availableUnits()).to.eql(3);
    });
  });

  describe('#rentedUnits', function() {
    it ('should return the number of rented units', function() {
      expect(avalon.rentedUnits()).to.eql(1);
    });
  });
});






