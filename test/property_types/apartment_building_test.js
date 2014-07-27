var expect = require('chai').expect,
	ApartmentBuilding = require('../../src/property_types/apartment_building'),
  Property = require('../../src/property_types/property'),
  Unit = require('../../src/unit'),
  Manager = require('../../src/people/manager');
  Tenant = require('../../src/people/tenant');
  Person = require('../../src/people/person');

describe('ApartmentBuilding', function(){
	var terraces = new ApartmentBuilding('Terraces', '66 7th Street');
    bob = new Manager('Bob Smith', '555-555-555');
    unit5 = new Unit('one', terraces, 700, '$2000'),
    unit6 = new Unit('two', terraces, 700, '$2000'),
    unit7 = new Unit('three', terraces, 700, '$2000'),
    unit8 = new Unit('four', terraces, 750, '$2500'),
    unit9 = new Unit('five', terraces, 750, '$2500'),
    john = new Tenant('John Doe', '555-555-555'),
    jim = new Person('Jim Taylor', '555-5555'),
    carl = new Person('Carl Smith', '555-5555');

  it ('should have a name', function() {
    expect(terraces.name).to.eql('Terraces');
  });

  it ('should have an address', function() {
    expect(terraces.address).to.eql('66 7th Street');
  });

  it ('should initially have an empty units array', function() {
  	expect(terraces.units).to.be.empty;
  });

  describe('#setManager', function() {
    it ('should set the manager', function() {
      terraces.setManager(bob);
      expect(terraces.manager).to.eql(bob);
    });
  });

  describe('#getManager', function() {
    it ('should return the manager', function() {
      expect(terraces.getManager()).to.eql(bob);
    });
  });

  describe('#addUnit', function() {
    it ('should add new units', function() {
      terraces.addUnit(unit5);
      terraces.addUnit(unit6);
      terraces.addUnit(unit7);
      terraces.addUnit(unit8);
      terraces.addUnit(unit9);
      expect(terraces.units).to.eql([unit5, unit6, unit7, unit8, unit9]);
    });
  });

  describe('#addTenant', function() {
    it ('should add a new tenant to a unit', function() {
      john.addReference(jim);
      john.addReference(carl);
      terraces.addTenant(unit5, john);
      expect(unit5.tenant).to.eql(john);
    });
  });

  describe('#removeTenant', function() {
    it ('should remove an existing tenant from a unit', function() {
      terraces.removeTenant(unit5, john);
      expect(unit5.tenant).to.eql(null);
    });
  });

  describe('#availableUnits', function() {
    it ('should return the number of available units', function() {
      terraces.addTenant(unit5, john);
      expect(terraces.availableUnits()).to.eql(4);
    });
  });

  describe('#rentedUnits', function() {
    it ('should return the number of rented units', function() {
      expect(terraces.rentedUnits()).to.eql(1);
    });
  });
});




