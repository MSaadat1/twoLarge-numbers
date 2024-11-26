// filterArray function takes an array and callback function as inputs
// this function should return a new array to satisfy the condition
// in the callback function
// to modify the function , it should accept an additional argument 
// to specifies the start of index

// first we need a function with three arguments
// an array , callback and index from where the filter starts in an array
function filterArray(array, callback, index = 0){
    // need an empty array to push new array after fulfilling the condition
    let newArray = [];
    // for loop to go through each element in an array
    for(let i = index; i < array.length; i++){
        // if callback function is true
        if(callback(array[i])){
        // pass them to new array
        newArray.push(array[i]);
        }
    }
    // return the newArray
    return newArray;
}
// we need to have the callback function with the condition
function isEven(num){
    return num % 2 === 0;
}

console.log(filterArray([1,2,3,4], isEven, 1));