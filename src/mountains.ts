//moutain type - interface defines the type
export interface Mountain {
  name: string;
  height: number;
}

//array of objects - diff moutatins
/* export */ const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
//how to check if array is empty
//once type is defined on line 15 won't have to use Moutain[] again
export function findNameOfTallestMountain(mountains: Mountain[]) {
  //if nothing in array, then length is 0
  if (mountains.length === 0) {
    return "";
    //reduce accepts a function - reduce counts all things in array
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //after => put what you need inside of curly
  } else {
    let largest = mountains.reduce((prevMt, currentValue) =>
      prevMt.height > currentValue.height ? prevMt : currentValue
    );
    return largest.name;
    //return largest //=> gives arry object
  }
}
//naming the variable
let tallBoy = findNameOfTallestMountain(mountains);
console.log(tallBoy); //prints Everest

//use reduce

/* export function findNameOfTallestMountain2(moutain: Mountain[]): string {
  if (mountains.length === 0) {
    return "";
    //reduce accepts a function - reduce counts all things in array
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //after => put what you need inside of curly
  } else {
    let largest = mountains.reduce((prevMt, currentValue) =>
      prevMt.height > currentValue.height ? prevMt : currentValue
    );
    return largest.name;
  }
} */

//to get access to name of returned

/* export function findNameOfTallestMountain(mountains: Mountain[]) {
  //if nothing in array, then length is 0
  if (mountains.length === 0) {
    return "";
    //reduce accepts a function - reduce counts all things in array
    //const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //after => put what you need inside of curly
  } else {
    let largest = mountains.reduce((prevMt, currentValue) =>
      prevMt.height > currentValue.height ? prevMt : currentValue
    );
    return largest;
  }
} */
