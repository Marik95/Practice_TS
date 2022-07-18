const colors = ['red', 'blue', 'yellow']; // the same as const colors: string[] = [];

const dates = [new Date(), new Date()];

const fruitsByColor =[
    ['tomato'],
    ['apple'],
    ['lemon']
] // the same as const fruitsByColor: string[][] = [];


// Help with inference when we extracting value
const color = colors[0];
const color1 = colors.pop();

//Prevent icompatible values
colors.push('true'); //colors.push(true) - this is wrong operation (true is boolean not string)


//Help with 'map'
colors.map((color: string): string => {
    return color.toUpperCase();
})

//Flexible types

const importantDates = [new Date(), '2021-11-11']; 
// the same as
const importantDates2:  (string | Date)[] = [new Date()];
importantDates2.push('2021-11-11');