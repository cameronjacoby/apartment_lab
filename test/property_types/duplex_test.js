var expect = require('chai').expect,
	Duplex = require('./../../src/property_types/duplex.js'),
  Property = require('./../../src/property_types/property.js'),
  Unit = require('./../../src/unit.js'),
  Manager = require('./../../src/people/manager.js');
  Tenant = require('./../../src/people/tenant.js');
  Person = require('./../../src/people/person.js');

describe('Duplex', function(){
  var one = new Unit('one', terraceLane, 800, '$3000'),
    two = new Unit('two', terraceLane, 800, '$3000'),
    three = new Unit('three', terraceLane, 1200, '$4000'),
    terraceLane = new Duplex('348 Terrace Lane', one, two),
    bob = new Manager('Bob Smith', '555-555-555');
    jamie = new Tenant('Jamie Doe', '555-555-555'),
    justin = new Person('Justin Taylor', '555-5555'),
    christine = new Person('Christine Smith', '555-5555');

  it ('should have an address', function() {
    expect(terraceLane.address).to.eql('348 Terrace Lane');
  });

  it ('should have two units', function() {
  	expect(terraceLane.units).to.eql([one, two]);
  });

  describe('#setManager', function() {
    it ('should set the manager', function() {
      terraceLane.setManager(bob);
      expect(terraceLane.manager).to.eql(bob);
    });
  });

  describe('#getManager', function() {
    it ('should return the manager', function() {
      expect(terraceLane.getManager()).to.eql(bob);
    });
  });

  describe('#addUnit', function() {
    it ('should not allow more than two units', function() {
      expect(terraceLane.addUnit(three)).to.eql([one, two]);
    });
  });

  describe('#addTenant', function() {
    it ('should add a new tenant to a unit', function() {
      jamie.addReference(justin);
      jamie.addReference(christine);
      terraceLane.addTenant(one, jamie);
      expect(one.tenant).to.eql(jamie);
    });
  });

  describe('#removeTenant', function() {
    it ('should remove an existing tenant from a unit', function() {
      terraceLane.removeTenant(one, jamie);
      expect(one.tenant).to.eql(null);
    });
  });

  describe('#availableUnits', function() {
    it ('should return the number of available units', function() {
      terraceLane.addTenant(one, jamie);
      expect(terraceLane.availableUnits()).to.eql(1);
    });
  });

  describe('#rentedUnits', function() {
      it ('should return the number of rented units', function() {
      expect(terraceLane.rentedUnits()).to.eql(1);
    });
  });
});







