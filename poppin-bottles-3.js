var input = process.argv[2];

let full_bottles = input / 2;
let empty_bottles_remaining = 0;
let caps_remaining = 0;
let bottles_counter = 0;
let bottles_earned = 0;
let caps_earned = 0;

while (full_bottles > 0) {
  caps_remaining += (full_bottles % 4);
  caps_earned += (Math.floor(full_bottles / 4) + Math.floor(caps_remaining / 4));
  empty_bottles_remaining += (full_bottles % 2);
  bottles_earned += (Math.floor(full_bottles / 2) + Math.floor(empty_bottles_remaining / 2));
  bottles_counter += full_bottles;
  full_bottles = Math.floor(full_bottles / 4) + Math.floor(full_bottles / 2) +
                 Math.floor(caps_remaining / 4) + Math.floor(empty_bottles_remaining / 2);
  caps_remaining %= 4;
  empty_bottles_remaining %= 2;
}

console.log("TOTAL BOTTLES:", bottles_counter);
console.log("TOTAL EARNED:");
console.log("   BOTTLES:", bottles_earned);
console.log("   CAPS:", caps_earned);


//total bottles at beginning
//track remaining caps and empty bottles
//# of fresh bottles = empty bottles / 4 + empty bottles / 2 (floor both expressions) (determine how many empty bottles there are)




