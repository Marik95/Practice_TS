// 1) Function returns thr "any" type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);
coordinates.x;

// 2) When we declare a variable on one line and initialize later
let words = ["one", "two", "three"];
let isTwo: boolean;
for (let i =0; i < words.length; i++){
    if(words[i] === "two"){
        isTwo = true;
    }
}

// 3) Variables whoes type can't be infered
let numbers = [-10, -1, 12];
let positiveNumber: boolean | number = false;
for (let i=0; i < numbers.length; i++){
    if(numbers[i] > 0){
        positiveNumber = numbers[i];
    }
}