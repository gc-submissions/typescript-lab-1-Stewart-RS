//interface Product
export interface Product {
  name: string;
  price: number;
}

//declare array called products which is an array of type Product
const products: Product[] = [
  { name: "Snickers", price: 2 },
  { name: "Sparkling Water", price: 3 },
  { name: "Samus Suit", price: 3000 },
];

/* function average(array) {
  return array.reduce((acc, next) => acc + next) / array.length;
} */

export function calcAverageProductPrice(products: Product[]) {
  if (products.length === 0) {
    return 0;
  } else {
    const avg =
      products.reduce((total, amount) => total + amount.price, 0) /
      products.length;
    return avg;
  }
}

let productAvg = calcAverageProductPrice(products);
console.log(`Avg of Products:`);
console.log(productAvg); //prints avg 1001.6

/*   if (products.length === 0) {
    return 0;
  } else {
    let avg = products.reduce((p, c) => (p.price > c.price ? p : c));
    return avg;
  } */
