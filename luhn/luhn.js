function valid(num) {
  let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let check_dig = num % 10;
  let checksum = 0;
  num = Math.floor(num / 10);
  for (i = 9; i >= 0; i--) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    i % 2 === 1 ? sum[i] = (digit * 2 + 9) % 9 : sum[i] = digit;
    digit == 9 ? sum[i] = 9 : 1;
    checksum += sum[i];
  }
  return (checksum + check_dig) % 10 === 0;
}

module.exports = valid;

