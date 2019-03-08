let list = [];

function my_sort(arr) {
  return arr.sort(function(a, b) { return a - b; });
}

module.exports = {
  store: function(num) {
    list.push(num);            //first task
  },
  ascending: function() {
    return my_sort(list);
  }
}
