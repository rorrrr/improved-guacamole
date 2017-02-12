var Customer = function(name){
  this.name = name;
  this.cash = 28;
  this.collection = [];
}

Customer.prototype = {
  buyRecord: function(record){
    if (this.cash >= record.price)
    {
      this.collection.push(record);
      this.cash -= record.price;
    } 
    else 
    {
      return "Can't afford " + record.title + " fam"
    }
  },

  sellRecord: function(record){
    this.collection.pop(record);
    this.cash += record.price;
  }


}


module.exports = Customer;