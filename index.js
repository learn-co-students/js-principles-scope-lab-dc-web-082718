// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Should this mutate the var or return the result?
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "value";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new value";
}
