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


numberCollection.sort();
charactersCollection.sort();
linkedList.sort();


console.log(charactersCollection.data);

linkedList.print();