import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharctersColection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([4, -3, 10, 2, 5, 7, 3]);
const charactersCollection = new CharactersCollection('ZxYmba');
const linkedList = new LinkedList();

linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);

const sorter1 = new Sorter(charactersCollection);
const sorter = new Sorter(numberCollection);
const sorter2 = new Sorter(linkedList);

sorter.sort();
sorter1.sort();
sorter2.sort();


console.log(charactersCollection.data);

linkedList.print();