import { NumbersCollection } from "./NumbersCollection";

export class Sorter{
    // collection: number[];

    // constructor(collection: number[]) {
    //     this.collection = collection;        
    // }
    // the same as the code below

    constructor(public collection: NumbersCollection) {}

    sort(): void{
        const { length } = this.collection;

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1; j++){

                    if(this.collection.compare(j, j+1)){
                        this.collection.swap(j, 1+j)
                    }
                
            }
        }
    }
}