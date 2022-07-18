const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// Type alias
type Drink = [string, boolean, number];

// annotation for tuples
const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const coffee: Drink = ['coffee', false, 10];

// cola[1] = 'black'; # Type 'string' is not assignable to type 'boolean'


// Some examp. that tuples is not popular

const carSpecs: [number, number] = [400, 3354];

//The same in object is more comfortable
const carSpecsObj ={
    horsepower: 400,
    weight: 3354
}