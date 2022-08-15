// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
    // your code here
    if(array.length > 0){
    let final = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue) / array.length;
      return final;
    }
    else {
      return 0;
    }
  }
