var is = require('assert');
var Record = require('../Record');
var RecordStore = require('../RecordStore');
var Customer = require('../Customer')

describe("Customer", function(){

  var recordStore1;
  var recordStore2;
  var record1;
  var record2;
  var record3;


  beforeEach("Setup", function() {
    record1 = new Record("Eminem", "Stan", 5);
    record2 = new Record("Jay-Z", "99 Problems", 10);
    record3 = new Record("Eminem", "Lose Yourself", 15);
    recordStore1 = new RecordStore("SomeStore", "SomeCity");
    customer1 = new Customer("Rory");
  });

  it("should have a name", function() {
    is.equal("Rory", customer1.name);
  }),

  it("should be able to buy a record", function() {
    customer1.buyRecord(record1);
    is.equal(1, customer1.collection.length);
  }),

  it("should be able to sell a record", function() {
    customer1.buyRecord(record1);
    customer1.sellRecord(record1);
    is.equal(0, customer1.collection.length);
  }),

  it("should be able to lose money when buying", function(){
    customer1.buyRecord(record1);
    is.equal(23, customer1.cash);
  }),

  it("should be able to gain money when selling", function(){
    customer1.sellRecord(record1);
    is.equal(33, customer1.cash);
  }),

  it("should be able to not buy if cash would go below 0", function(){
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    is.equal("Can't afford Lose Yourself fam", customer1.buyRecord(record3));
  });

})