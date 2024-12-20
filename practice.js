//Reverse a sentence and print it 
// Find the sum of array value using Rest Operator 
//reduce the array of elements to a single value 
//reduce: Find the highest/lowest value from the array of the elements 
//Promise Async/await 
// Write a program to check weather the number is even/odd
//logging both key and key-value pairs 
//Modify an object Prorperty in an array of objects
//Updating the value using filter() function 
//access individual value from the Array[key:value]
//Write a program to Print all the 'keys' of the arrayObject 
// Write a program to select odd number from array
// Merging arrays with unique values
//Remove Null Objects from Nested Array of objects in JavaScript
// Remove the Duplicate value from the object Array
// program to extract value as an array from an array of objects
// Check if all the element of an array is present in another array
// Sum total from array of object properties with reduce method 
// Get list of Duplicate Objects in an Array of Objects.
// Get distinct values from an array of objects in JavaScript?
//  Separate Array of Objects into Multiple Objects in JavaScript 
// How to push an array into the Array of objects  
// How to get distinct values from an array of objects in JavaScript?
// Count occurrences of all items in an array in JavaScript
// Let's use replace() to improve the example above (capitalized the first letter)
//Find the total price from a array obj 

const sa = "I love JavaScript"
//Reverse a sentence and print it
function revString(ss){
    return ss.split(" ").reduce((acc,ele)=>ele+" "+acc).trim();
} 
const reverseStr = revString(sa)
console.log(reverseStr);

const num = [10,3,56,1,67,7];
// Find the sum of array value using Rest Operator 
function singleRed(...number){
    return number.reduce((a,b)=>a+b,0)
}
console.log("Sum",singleRed(12,34,5,11,65,3));


//reduce the array of elements to a single value 
function singleValue(a,b){
    return a+b;
}

//reduce: Find the highest/lowest value from the array of the elements 
function highValue(a,b){
    return Math.max(a,b)
}

function lowValue(a,b){
    return Math.min(a,b)
}

const singleVal = num.reduce(singleValue);
const maxValue = num.reduce(highValue);
const minValue = num.reduce(lowValue)

console.log(`The total ${singleVal}....Max Value ${maxValue}...Min Value...${minValue}`);



//Promise Async/await 
// Write a program to check weather the number is even/odd


