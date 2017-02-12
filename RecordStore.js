var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100;


  RecordStore.prototype = {

   listInventoryOfTitles: function(){
     var titlesArray = [];
     // console.log(this.inventory)
     for (record of this.inventory){
       titlesArray.push(record.title)
       // console.log(record.artist)
     }
     // console.log(titlesArray)
     return titlesArray;
   },

    addRecord: function(record){
      this.inventory.push(record);
    },

    sellRecord: function(record){
      this.inventory.pop(record);
      this.balance += record.price;
    },

    lowdown: function(){
      var inventoryValue = 0;
      for (record of this.inventory){
        inventoryValue += record.price;
      }
      // console.log("Balance: " +  this.balance + " , InventoryValue: " + inventoryValue);
      return "Balance: " +  this.balance + " , InventoryValue: " + inventoryValue;
      
    }
  }
}

// Create a method so the Record Store can sell a Record and adjusts the Store's balance to account for the Record being sold.

// listInventoryOfTitles: function(){
//   var titlesArray = [];
//   console.log(this.inventory)
//   for (record in this.inventory){
//     titlesArray.push(record.title)
//     // console.log(record.artist)
//   }
//   console.log(titlesArray)
//   return titlesArray;
// },

// RecordStore.prototype = {
//   listInventoryOfTitles: function(){
//     var titlesString = "";
//     console.log(this.inventory)
//     for (record in this.inventory){
//       titlesString += record.title + " | " 
//     }
//     console.log(titlesString)
//     return titlesString;
//   }
// }

module.exports = RecordStore;