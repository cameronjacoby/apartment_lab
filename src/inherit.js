// inherit function
var inherit = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

// exports inherit function
module.exports = inherit;