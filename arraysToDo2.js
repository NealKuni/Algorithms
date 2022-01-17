// Reverse

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

let arr = [1,2,3,4,5];
let temp = arr[0];
let temp2 = arr[1];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;
arr[1] = arr[arr.length - 2]
arr[arr.length - 2] = temp2;
console.log(arr)


// Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// ???? I couldn't figure out Rotate. I might need some assistance on it. 

// Filter Range

// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

let array = [1,2,3,4,5];
let array2 = [];
max = 3;
min = 1;

const filterRange = (arr, mx, mn) => {
    
    for(let i = 0; i < arr.length -1; i++){
            if (i == mn){
                array2[0] = arr[i];
                console.log(array2)
            } else if (i > mn && i <= mx){
                array2[array2.length] = arr[i];
            }
        }
        console.log(array2)
        return array2;
    }
    
filterRange(array, max, min)


// Concat

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

let array = [1,2,3,4,5];
let array2 = ["cats", "dogs"]


const arrConcat = (arr1, arr2) => {
    for (let i = 0; i < arr1.length -1; i++){
        arr2[arr2.length] = arr1[i];
    }
    console.log(arr2)
    return arr2;
}

arrConcat(array, array2);