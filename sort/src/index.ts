import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([4, -3, 10, 2, 5, 7, 3]);

const sorter = new Sorter(numberCollection);
sorter.sort();

console.log(numberCollection.data);
