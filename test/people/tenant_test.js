var expect = require('chai').expect,
  Person = require('./../../src/people/person.js'),
  Tenant = require('./../../src/people/tenant.js');

describe('Tenant', function() {
	var jane = new Tenant('Jane Doe', '555-555-555'),
      jill = new Person('Jill Taylor', '555-5555');

  it ('should have a name', function() {
    expect(jane.name).to.eql('Jane Doe');
  });

  it ('should have contact info', function() {
    expect(jane.contact).to.eql('555-555-555');
  });

  it ('should initially have an empty references array', function() {
  	expect(jane.references).to.be.empty;
  });

  describe('#addReference', function() {
    it ('should add new reference', function() {
      jane.addReference(jill);
      expect(jane.references).to.eql([jill]);
    });
  });
});