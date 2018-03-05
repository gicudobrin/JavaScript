ECMASCRIPT2015  ES6

const = ['Monday'];

//using let with for loops




let orderCount = 0;
const takeOrder = (topping, crustType) => {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping) 
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount); 
};

takeOrder('mushrooms', 'thin crust');
takeOrder('bananas', 'small crust');
takeOrder('apples', 'red crust');
console.log(orderCount);
console.log(getSubTotal(orderCount));
console.log(getTotal());