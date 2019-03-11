let pay = 40;

let full_bottles = pay / 2;
let empty_bottles_remaining = 0;
let caps_remaining = 0;
let bottles_counter = 0;

while (full_bottles > 0) {
  caps_remaining += (full_bottles % 4);
  empty_bottles_remaining += (full_bottles % 2);
  bottles_counter += full_bottles;
  full_bottles = Math.floor(full_bottles / 4) + Math.floor(full_bottles / 2) +
                 Math.floor(caps_remaining / 4) + Math.floor(empty_bottles_remaining / 2);
  caps_remaining %= 4;
  empty_bottles_remaining %= 2;
}

console.log(bottles_counter);

