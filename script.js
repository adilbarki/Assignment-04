let numbers = [10, 33, 62, 64, 6, 95, 9, 8, 80, 43, 23, 56, 76, 12, 342];
let highest = numbers[0];
let lowest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    } else if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);