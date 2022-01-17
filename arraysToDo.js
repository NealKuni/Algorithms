// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

let arr = [1,2,3,4,5,6];
let additionalVal = "dogs";

arr[0] = additionalVal;

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

let arr = [1,2,3,4,5,6];
const popArr = (arr) => {
    let arr2 = arr[0];
    return arr2;
}
popArr(arr);


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

let array = [1,2,3,4,5,6];
let index = 3;
let givenValue = 10;

const insertAt = (arr, idx, value) => {
    arr[idx] = value; 
    return arr;
}

insertAt(array, index, givenValue);

