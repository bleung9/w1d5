//DO NOT CHANGE DATA W/ A FUNCTION, IF THAT DATA IS NOT WITHIN THE FUNCTION.  MAKE COPY, THEN CHANGE.  RETURN THE COPY
//WANT TO RETURN THE CHANGED DATA.

let list = [];

function my_sort(arr) {
  sorted = arr.slice().sort(function(a, b) { return a - b; });   //this doesn't modify the original list; produces a shallow copy of original list; THEN sorts that list
  return sorted;
}

module.exports = {
  store: function(num) {
    list.push(num);            //first task
  },
  ascending: function() {
    return my_sort(list);
  },
  // changed: function() {
  //   console.log(list);
  // }
}

