import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharctersColection";

const numberCollection = new NumbersCollection([4, -3, 10, 2, 5, 7, 3]);
const charactersCollection = new CharactersCollection('ZxYmba');

const sorter1 = new Sorter(charactersCollection);
const sorter = new Sorter(numberCollection);
sorter.sort();
sorter1.sort()

console.log(charactersCollection.data);
