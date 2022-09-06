class ArrayOfNumbers {
    constructor(public colection: number[]) {}

    get(index: number): number {
        return this.colection[index]
    }
}

class ArrayOfStrings {
    constructor(public colection: string[]) {}

    get(index: number): string {
        return this.colection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public colection: T[]) {}

    get(index: number): T {
        return this.colection[index]
    }
}

// Example of generics with functions

function printString(arr: string[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}


// Generic Constrains

class Human {
    print() {
        console.log('I am a human');
    }
}

class Robot {
    print() {
        console.log('I am a robot');
    }
}

interface Printable {
    print(): void;
}

function printAnything1<T extends Printable>(arr: T[]): void {
    for (let i = 0; i <arr.length; i++ ){
        arr[i].print();
    }
} 