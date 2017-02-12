var is = require('assert');
var Record = require('../Record');
var RecordStore = require('../RecordStore');

describe("RecordStore", function(){

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
  });

  it("Should have a store name", function(){
    is.equal("SomeStore", recordStore1.name);
  }),

  it("Should have a store city", function(){
    is.equal("SomeCity", recordStore1.city);
  }),

  it("Should have an inventory empty array of records", function(){
    // console.log(recordStore1.inventory[0].artist);
    is.equal(0, recordStore1.inventory.length);
  }),

  it("Should be able to add records to the inventory", function(){
    // recordStore1.inventory.push(record1);
    recordStore1.addRecord(record1);
    is.equal("Stan", recordStore1.inventory[0].title);
  })

  it("Should have a recordStore balance", function(){
    is.equal(100, recordStore1.balance);
  }),

  it("Should be able to list inventory of titles", function(){
    // console.log(recordStore1.listInventoryOfAlbums())
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    is.equal("Stan", recordStore1.listInventoryOfTitles()[0]);
    is.equal("99 Problems", recordStore1.listInventoryOfTitles()[1]);
  }),

  it("Should be able to sell record and gain money", function(){
    recordStore1.addRecord(record1);
    recordStore1.sellRecord(record1);
    is.equal(105, recordStore1.balance);
    is.equal(0, recordStore1.inventory.length);
  }),

  it("Should be able to get the financial lowdown", function(){
    recordStore1.addRecord(record1);
    recordStore1.sellRecord(record1);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    is.equal("Balance: 105 , InventoryValue: 15", recordStore1.lowdown());
  })

})