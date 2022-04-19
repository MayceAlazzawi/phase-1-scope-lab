// // Write your solution in this file!
 var customerName = 'bob';
console.log(customerName);

function upperCaseCustomerName(str) {
  str.toUpperCase();
}
upperCaseCustomerName()
 
function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer ;
}
setBestCustomer();

function overwriteBestCustomer() {
  return bestCustomer = 'maybe bob';
}
overwriteBestCustomer();

const leastFavoriteCustomer = 'mayce';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'hi';
}
changeLeastFavoriteCustomer();
