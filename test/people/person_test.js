var expect = require('chai').expect,
  Person = require('./../../src/people/person.js');

describe('Person', function() {
	var john = new Person('John Doe', '555-555-555');

  it ('should have a name', function() {
    expect(john.name).to.eql('John Doe');
  });

  it ('should have contact info', function() {
    expect(john.contact).to.eql('555-555-555');
  });
});