let numbers = [];

let count = 5 + Math.floor(Math.random() * 100);

for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 100) - 50);
}

console.log(numbers);

let sum = 0;
let c = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        sum += numbers[i];
        c++;
    }
    if (c == 5) {
        break;
    }
}

console.log(sum);
