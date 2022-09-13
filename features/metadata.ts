import "reflect-metadata";

const box = {
    color: "black"
};

// Metadata for object
Reflect.defineMetadata('note', 'hello', box);
Reflect.defineMetadata('width', 30, box);

const note = Reflect.getMetadata('note', box);
const width = Reflect.getMetadata('width', box);

console.log(note, width);

// Metadata for object property

Reflect.defineMetadata('note', 'hello', box, 'color');

const noteColor = Reflect.getMetadata('note', box, 'color');

console.log(noteColor);