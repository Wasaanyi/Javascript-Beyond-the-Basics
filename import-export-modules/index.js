// importing and exporting modules
// wonderful tool for sharing code and reusing code.
// code is quite clean and maintainable

import { sum, findMax } from "./myFunctions.js";
import items, {people} from "./myArray.js";
import {person as lorraine} from "./myObjects.js"


console.log(sum(1,39,7));
console.log(findMax(100, 3000, 3500));

// sets contain unique items obtained from an array
const uniqueItems = new Set(items);
console.log(uniqueItems);

console.log(people);

lorraine.sayHello();

// must have package.json to run with node
// must include type="module" when adding in html
