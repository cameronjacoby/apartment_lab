var inherit = function(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
};

// exports the inherit function
module.exports = inherit;