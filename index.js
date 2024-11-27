// in an array of numbers
// return the two largest numbers
// function with one argument
function twoLargestNumbers(num) {
  // to find the maximum number in a array,initialize the maximum with -Infinity
  // to ensure any number in the array can replace it at first comparison
  // -Infinity is a concept in javascript that is smaller than any number
  // two values are assigned, to compare with two largest numbers in an array of numbers

  let max1 = -Infinity;
  let max2 = -Infinity;
  // for edge cases if there is not two numbers
  if (num.length < 2) return null;
  // loop through each number in an array
  for (let i = 0; i < num.length; i++) {
    // if the number is bigger than max1 value, the number is assigned to max1
    if (num[i] > max1) {
      max1 = num[i];
    }
  }
  // for finding the second largest number
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max2 && num[i] !== max1) {
      max2 = num[i];
    }
  }
  return [max1, max2];
}
console.log(twoLargestNumbers([2, 3, 4, 5, 6]));

// if combine the two for loops for space complexity

// for(let i = 0; i < num.length; i++){
//    if(num[i] > max1){
//     max2 = max1; update max2 to the previous max1
//     max1 = num[i];  update max1
//   }else if (num[i] > max2 && num[i] !== max1){
//     max2 = num[i]; update max2 if it is larger than the current max2
//   }
//  }
