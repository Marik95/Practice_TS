import "reflect-metadata";

@printMetadata
class Car {
    color: string = 'black';

    @markFunction('BIG SECRET2')
    drive(): void {
        console.log('I am driving');
    }
}

function printMetadata(target: typeof Car){
    for(let key in target.prototype) {
        const info = Reflect.getMetadata('info', target.prototype, key);
        console.log(key);
    }
    // console.log(target.prototype);
}


function markFunction(secretInfo: string){
    return function(target: Car, key: string){
        Reflect.defineMetadata('info', secretInfo, target, key);
        // const info = Reflect.getMetadata('info', target, key);
        // console.log(info);
    }
}

// const info = Reflect.getMetadata('info', Car.prototype, 'drive');

// console.log(info);






// ============================================ Simple Examples of Metadata===========================
// const box = {
//     color: "black"
// };

// Metadata for object
// Reflect.defineMetadata('note', 'hello', box);
// Reflect.defineMetadata('width', 30, box);

// const note = Reflect.getMetadata('note', box);
// const width = Reflect.getMetadata('width', box);

// console.log(note, width);

// Metadata for object property

// Reflect.defineMetadata('note', 'hello', box, 'color');

// const noteColor = Reflect.getMetadata('note', box, 'color');

// console.log(noteColor);