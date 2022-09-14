import "reflect-metadata";

@printMetadata
class Car {
    color: string = 'black';

    @markFunction('BIG SECRET2')
    drive(): void {
        console.log('I am driving');
    }
}


function markFunction(secretInfo: string){
    return function(target: Car, key: string){
        Reflect.defineMetadata('info', secretInfo, target, key);
    }
}

// const info = Reflect.getMetadata('info', Car.prototype, 'drive');

// console.log(info);

function printMetadata(target: typeof Car){
    let targetObj = Object.getOwnPropertyNames(target.prototype)
    console.log(targetObj);
    for(let value of targetObj) {
        console.log(value);
        const info = Reflect.getMetadata('info', target.prototype, value);
        if(info){
            console.log(info);
        }
        
    }    
}





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