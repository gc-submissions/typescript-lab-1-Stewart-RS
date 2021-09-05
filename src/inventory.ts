import { Product } from "../src/products";

//works with extends but not the other way.
/* export interface InventoryItem extends Product {
  quantity: number;
} */

export interface InventoryItem {
  product: Product;
  quantity: number;
}

//declare array called products which is an array of type InventoryItem
const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

/* Returns a number, the total value of all the products in the
inventory array provided as an argument.  

This is calculated as follows: 
For each InventoryItem take the product price times the quantity. 
Add these together for all the items. For the above data, the total
will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.

*/
export function calcInventoryValue(inventory: InventoryItem[]) {
  //If the array argument is empty, return 0.
  if (inventory.length === 0) {
    return 0;
  } else {
    const countTotal = inventory.reduce(
      (acc, curr) => acc + curr.quantity * curr.product.price,
      0
    );
    return countTotal;
  }
}

let inventoryPrice = calcInventoryValue(inventory);
console.log(`Inventory Value:`);
console.log(inventoryPrice); //prints 170 in console.
