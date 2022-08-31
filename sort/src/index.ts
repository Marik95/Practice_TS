class Sorter{
    // collection: number[];

    // constructor(collection: number[]) {
    //     this.collection = collection;        
    // }
    // the same as the code below

    constructor(public collection: number[] | string) {}

    sort(): void{
        const { length } = this.collection;

        for(let i=0; i<length; i++){
            for(let j=0; j<length-i-1; j++){

                // if collection is array of numbers
                if(this.collection instanceof Array){
                    if(this.collection[j]>this.collection[j+1]){
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = leftHand;
                    }
                }

                //if collection is array of strings
                if(typeof this.collection === 'string'){
                    
                }
            }
        }
    }
}

const sorter = new Sorter([4, -3, 10, 2])
sorter.sort();

console.log(sorter);