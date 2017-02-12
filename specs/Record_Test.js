var is = require('assert');
var Record = require('../Record');
var RecordStore = require('../RecordStore');

describe("Record", function(){

  var record1;
  var record2;
  var record3;

  beforeEach("Setup", function() {
    record1 = new Record("Eminem", "Stan", 5);
    record2 = new Record("Jay-Z", "99 Problems", 10);
    record3 = new Record("Eminem", "Lose Yourself", 15);
  });

  it("Should be able to have an Artist", function(){
    is.equal("Eminem", record1.artist);
  }),

  it("Should be able to have a Title", function(){
    is.equal("99 Problems", record2.title);
  }),

  it("Should be able to have a Price", function(){
    is.equal(15, record3.price);
  });

})