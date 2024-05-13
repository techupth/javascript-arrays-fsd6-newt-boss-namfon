let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
];

// Start coding here
let isArray;
let creditCardTypeOfBlindermann;
let productQuantityOfJoannet;
let totalPurchaseOfDary;

isArray = Array.isArray(orders);
//console.log(isArray);

//console.log(orders[2].customerName == "Toinette Blindermann");
creditCardTypeOfBlindermann = orders[2].creditCardType;
// console.log(creditCardTypeOfBlindermann);

orders[2].creditCardType = "visa";
// console.log(orders[2].creditCardType);

// console.log(orders.filter((x) => x.customerName == "Anjela Joannet"));
productQuantityOfJoannet = orders.filter(
  (x) => x.customerName == "Anjela Joannet"
)[0].productQuantity;
console.log(productQuantityOfJoannet);

let celia = orders.filter((x) => x.customerName == "Celia Dary")[0];
totalPurchaseOfDary = celia.productPrice * celia.productQuantity;
console.log(totalPurchaseOfDary);

orders.shift();

console.log(orders);
