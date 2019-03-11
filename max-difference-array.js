function max_diff(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let left_arr = arr.slice(0, Math.floor(arr.length / 2));
  let right_arr = arr.slice(Math.floor(arr.length / 2));
  let diff_btw_halves = Math.max.apply(Math, right_arr) - Math.min.apply(Math, left_arr);
  return Math.max(max_diff(left_arr), max_diff(right_arr), diff_btw_halves);
}

var input = [100, 2, 6, 3, 80];
console.log(max_diff(input));
