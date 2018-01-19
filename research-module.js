var list = [];

function sortDataList(list) {
  list.sort(function(a,b){
      return a - b
  })
}

module.exports = {
  storeNumber: function(num) {
    list.push(num);
    console.log("I store " + num + " in the list.");

  },

  printDataList: function() {
    sortDataList(list);
    console.log(list);
  }
};
