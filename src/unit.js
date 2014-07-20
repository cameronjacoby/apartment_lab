function Unit (number, building, sqft, rent) {
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
  this.tenant = null;
}

// returns true if unit is available
Unit.prototype.available = function(){
  if (this.tenant === null) {
    return true;
  }
  else {
    return false;
  }
};

// exports the Unit constructor
module.exports = Unit;