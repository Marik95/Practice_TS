//array annotation
let colors: string[] = ['red', 'yellow', 'grey'];
let numbers: number[] = [1, 2, 3];


//classes annotation

class Car{

}
let car: Car = new Car();


//object literal

let point: {x: number; y: number} = {
    x: 20,
    y: 10
}


//Destructurization in objects TS

const profile = {
    name: 'Jack',
    age: 25,
    coordinates: {
        lat: 1,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age;
    }
}

//ES2015
const {age}: {age:number} = profile;

const {coordinates: {lat, lng}}: {coordinates: {lat: number; lng: number}} = profile;