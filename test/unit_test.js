var expect = require('chai').expect,
  Unit = require('../src/unit.js'),
  Property = require('../src/property_types/property.js');

describe("Unit", function() {
  var avalon = new Property('555 5th Street'),
	   unit1 = new Unit('one', avalon, 500, '$1500');

  it ('should have a number', function() {
    expect(unit1.number).to.eql('one');
  });

  it ('should have a building', function() {
    expect(unit1.building).to.eql(avalon);
  });

  it ('should have square footage', function() {
    expect(unit1.sqft).to.eql(500);
  });

  it ('should have rent', function() {
    expect(unit1.rent).to.eql('$1500');
  });

  it ('should initially have tenant set to null', function() {
    expect(unit1.tenant).to.eql(null);
  });

  describe('#available', function() {
    it ('should return true if unit is available', function() {
      expect(unit1.available()).to.eql(true);
    });
  });
});