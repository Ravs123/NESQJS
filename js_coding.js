// -- Active: 1733442639319@@localhost@3306
const url = "https://pokeapi.co/api/v2/pokemon/pikachu";


const employees =[
    {id:53,name:'Mike Iwins',age:35,designation:'Team Lead',salary:140000,phone:'4564651556'},
    {id:54,name:'Ava Elliot',age:25,designation:'Developer',salary:87000,phone:'4564651556'},
    {id:55,name:'Lima Hendrix',age:30,designation:'Developer',salary:100000,phone:'4564651556'},
    {id:55,name:'Ashton Cox',age:28,designation:'Developer',salary:90000,phone:'4564651556'},
    {id:56,name:'Kate Smith',age:26,designation:'Designer',salary:55000,phone:'4564651556'},
    {id:57,name:'Fiona Quinn',age:27,designation:'Tester',salary:65000,phone:'4564651556'},
    {id:58,name:'Bernard Neal',age:31,designation:'Analyst',salary:60000,phone:'4564651556'},
    {id:59,name:'Suzie Janes',age:33,designation:'Accountant',salary:49000,phone:'4564651556'},

]

const companies=[
    {name:'Company One',category:'Finance',start:1981,end:2000},
    {name:'Company two',category:'Retail',start:1992,end:2008},
    {name:'Company three',category:'Auto',start:1999,end:2007},
    {name:'Company four',category:'Retail',start:1989,end:2010},
    {name:'Company five',category:'Technology',start:2009,end:2014},
    {name:'Company six',category:'Finance',start:1987,end:2010},
    {name:'Company seven',category:'Auto',start:1986,end:1996},
    {name:'Company eight',category:'Technology',start:2011,end:2016},
    {name:'Company nine',category:'Retail',start:1981,end:1989},

]

const age=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


// const data = fetch(url)
// .then(response=>{
//     if(!response.ok){
//         throw new Error("could not fetch the resource")
//     }
//     return response.json();
// })
// .then(data=>console.log(data))
// .catch(error=>console.error(error))

/*fetching Data using Async/await method*/

// fetchData();
// async function fetchData(){
//     try {
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error("Couldn't not Fetch resource")
//         }
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// } 

// fetchData();


//Reverse a sentence and print it 
//reduce the array of elements to a single value 
//reduce: Find the highest value from the array of the elements 
//Promise Async/await 

//Reverse a sentence and print it 
// Find the sum of array value using Rest Operator 
//reduce the array of elements to a single value 
//reduce: Find the highest/lowest value from the array of the elements 
//Promise Async/await 
//logging both key and key-value pairs 
//Modify an object Prorperty in an array of objects
//Updating the value using filter() function 
//access individual value from the Array[key:value]
//Write a program to Print all the 'keys' of the arrayObject 
// Merging arrays with unique values
//Remove Null Objects from Nested Array of objects in JavaScript
// Remove the Duplicate value from the object Array
// Check if all the element of an array is present in another array
// Get list of Duplicate Objects in an Array of Objects.
// Get distinct values from an array of objects in JavaScript?
//  Separate Array of Objects into Multiple Objects in JavaScript 
// How to push an array into the Array of objects  
// How to get distinct values from an array of objects in JavaScript?
// Count occurrences of all items in an array in JavaScript
// Let's use replace() to improve the example above (capitalized the first letter)
//Find the total price from a array obj 



/*
1)Filter:Filter ages array which are 21 and above/over 
2)Filere : Filter 'Retail' Company
3) filter : Filter companies array which are started in 80's
4)filer : Filter companies that lasted more than 10years 
5)Filter : Employee Array who are 'developer'
6)Filter : Employee Array who's age is below "30" and Salary is above 85K
7)Filter : Filter Age array , find  odd and even values


1)map: map() method create new array from the existing/current array 
2)Create array of compaines names 
3)Map() : Find the employee  Designation and salary
4)Map() : map() compaies array with 'companies' name and 'start-end' 
5)Map(): Find employee name and convert them into upper case 
6)map():map() square root of age array 

__sort() : The sort () method sorts the items of an array. 
1) The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
2)sort() : sort() age array lowest to higest 
3)sort():sort() employee name by ascending order 
4)sort():sort() employee age by low to high

__Reduce(): reduce a conclusion out of array elements
1)reduce(): Get Total years of all the companies 
2)Reduce() Reduce() To Find the hightest age array value
3)Reduce():find the avarage salary of employee array 
4)Reduce():find the Sum of age array 
5)Reduce():Sum of Nums and Age array

*/

/*
Steps to Implement using a Hash Map
Create a Hash Map
Iterate Over the Array
Store and Check for Duplicates
*/
// FizzBuzz
// largest number from the array 
//lowest value from the array 

// /--Square root --/

// --Challenge 1: REVERSE A String 
// Return a string in reverse order 
// Ex: reverString('hello')==='olleh

//Challenge 2 : Validate a Palindrome 
//return true if palindrome or if not , return false 
//ex: isPalindrome('racecare')==true , is palindrome and ('hello')===false

//Filter:Filter ages array which are 21 and above/over 
//Filere : Filter 'Retail' Company
// filter : Filter companies array which are started in 80's
//filer : Filter companies that lasted more than 10years 
//Filter : Employee Array who are 'developer'
//Filter : Employee Array who's age is below "30" and Salary is above 85K
//Filter : Filter Age array , find  odd and even values


//Filter:Filter ages array which are 21 and above/over 


const filterAge=age.filter(item=>item>21)
// console.log(filterAge);

//Filere : Filter 'Retail' Company

const filterRetail=companies.filter(item=>item.category==='Retail')
// console.log(filterRetail)

// filter : Filter companies array which are started in 80's
const filterCompany=companies.filter(item=>item.start>=1980)
// console.log(filterCompany)


//filer : Filter companies that lasted more than 10years 
const filterCompanylasted=companies.filter(item=>item.end-item.start>10)
// console.log(filterCompanylasted);

//Filter : Employee Array who are 'developer'
const filterDevelopers=employees.filter(item=>item.designation='developers')
// console.log(filterDevelopers)


//Filter : Employee Array who's age is below "30" and Salary is above 85K
const employeeAgeSalary=employees.filter(item=>item.age<30 && item.salary>=85000)
// console.log(employeeAgeSalary)


//Filter : Filter Age array , find  even values
const evenFilter=age.filter(item=>item%2===0)
// console.log(ageFilter);

//Filter : Filter age array with odd elements 
const oddAgeValue=age.filter(item=>item%2===1)
// console.log(oddAgeValue);


//map: map() method create new array from the existing/current array 
//Create array of compaines names 
//Map() : Find the employee  Designation and salary
//Map() : map() compaies array with 'companies' name and 'start-end' 
//Map(): Find employee name and convert them into upper case 
//map():map() square root of age array 


//map: map() method create new array from the existing/current array 


//map(): map() method to Create array of compaines names 
const cmpName=companies.map(item=>item.name)
// console.log(cmpName);



//Map() : Find the employee  Designation and salary
const empDes_sal=employees.map(item=>{
    return `designation:${item.designation} and Salary:${item.salary}`
})
// console.log(empDes_sal)

//Map() : map() compaies array with 'companies' name and 'start-end' 
const cmpMap=companies.map(item=>{
    return `companyName:${item.name} companyStart:${item.start}-${item.end}`
})
// console.log(cmpMap);

//Map(): Find employee name and convert them into upper case 
const convertName=employees.map(item=>item.name.toUpperCase())
// console.log(convertName);

//map():map() square root of age array 
const squareRoot=age.map(item=>Math.sqrt(item   ))
// console.log(squareRoot)



//sort() : The sort () method sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).


//sort() : sort() age array lowest to higest 
const sortAge=age.sort((a,b)=>b-a)
// console.log(sortAge)


//sort():sort() employee name by ascending order 
const sortName=employees.sort((a,b)=>b.name-a.name)
// console.log(sortName);


//sort():sort() employee age by low to high
const ageSort=employees.sort((a,b)=>b.age-a.age)
// console.log(ageSort);


//Reduce(): reduce a conclusion out of array elements
//reduce(): Get Total years of all the companies 
//Reduce() Reduce() To Find the hightest age array value
//Reduce():find the avarage salary of employee array 
//Reduce():find the Sum of age array 
//Reduce():Sum of Nums and Age array

const nums =[2,2,4,5]

//reduce(): Get Total years of all the companies 
const totalyearsReduce=companies.reduce((acc,curr)=>{
    return acc+(curr.start+curr.end)
},0)
// console.log(totalyearsReduce)

//Reduce():Sum of Nums and Age array
const numsReduce=nums.reduce((acc,curr)=>acc+curr,0)
// console.log(numsReduce);
const ageReduce=age.reduce((acc,curr)=>acc+curr,0)
// console.log(ageReduce);
console.log(ageReduce+" " +numsReduce) ;

//Reduce() Reduce() To Find the hightest age array value
const highestValue=age.reduce((acc,curr)=>{
    return acc>curr ? acc:curr
})
console.log(highestValue);

//Reduce():find the avarage salary of employee array


//Reduce():find the Sum of age array 
const sumAgeReduce=age.reduce((acc,curr)=>acc+curr,0)
console.log(sumAgeReduce);

// FizzBuzz

const fizzBuzz=(()=>{
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5===0){
            console.log('FizzBuzz');
        }else if(i%3===0){
            console.log('Fizz');
        }else if(i%5===0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
})

// const fiznuzz=fizzBuzz()
// console.log(fiznuzz);


//Challenge 1: REVERSE A String 
//Return a string in reverse order 
//Ex: reverString('hello')==='olleh'

const revString=(str=>str.split('').reverse().join(''))
console.log(revString('hello'));



//Challenge 2 : Validate a Palindrome 
//return true if palindrome or if not , return false 
//ex: isPalindrome('racecare')==true , is palindrome and ('hello')===false 

const palindrome=(str=>{
    const isPalindrome=str.split('').reverse().join('')
    return isPalindrome===str
})
console.log(palindrome('NaN'))

/*
 * challenge 3: Reverse an integer 
 * return an interger in reverse 
 * ex: reverseInt(521)===125 
 */

const intReverse=(str=>{
    const resverInt=str.toString().split('').reverse().join('')
    return parseInt(resverInt)
})
console.log(intReverse(123456))

/** Challenge 4: Capitalize letters
 * Return a string with the first letter of every word capitalized 
 * ex capitalizeLetter('i love javascript')=== I LOVE JAVASCRIPT
 */

 const capLetter=(str=>{
    return str.toLowerCase().split(' ').map(data=>data[0].toUpperCase()+data.substr(1)).join(' ')
})
const strCapt=capLetter('i love javascript')
console.log(strCapt);

//Area of a square root  A=/s(s-a)(s-b)(s-c)
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);


//get the url of the webpage 

// console.log(document.URL);


//If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
/*
O/P { a: 'three', b: 'two' }
 */

//Reverse a sentence and print it 

const sa = "JavaScript is a Programming Language";

function reverseString(ss){
    return sa.split(' ').reduce((acc,ele)=>ele+ ' '+ acc).trim("")
}

// console.log(reverseString(sa));


let strword = sa.split(" ");
let word = [];

for(let i=(strword.length);i>=0;i--){
    word.push(strword[i])
}
const revStr = word.join(" ")


// console.log(revStr);

// Find the sum of array value using Rest Operator 
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30

const number = [12,4,17,122,45,2];

//reduce the array of elements to a single value
function total(a,b){
    return a+b;
}

const totalSum = number.reduce(total);
// console.log(`the total Sum of price ${totalSum}`);

//reduce: Find the highest/lowest value from the array of the elements 

function getHigh(first,next){
    return Math.max(first,next)
}

function getLow(first,next){
    return Math.min(first,next)
}

const highValue = number.reduce(getHigh);
const lowValue = number.reduce(getLow);

// console.log(`The high value ${highValue} and low value ${lowValue}`);


//Promise Async/await 

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        const clean = true;
        if(clean){
            resolve(`You cleaned the room`)
        }else{
            reject(`You didn't clean the reject `)
        }
    },1500);
}

function dogWalked(){
    return new Promise((resolve,reject)=>{
        let walked = true;
        if(walked){
            resolve(`You walked the Dog`)
        }else{
            reject(`You Didn't waled the dog`)
        }
    },1500);
}

async function doChores(){
    const dogWalking = await dogWalked()
    console.log(dogWalking);
    
    const kitchenCleaned = await cleanKitchen();
    console.log(kitchenCleaned);
}

// doChores();


//Write a program to Print all the 'keys' of the arrayObject 
// Merging arrays with unique values
//Remove Null Objects from Nested Array of objects in JavaScript
//check if an object with the same id already exists in the accumulated array.
// Remove the Duplicate value from the object Array  
// Get list of Duplicate Objects in an Array of Objects.
// Separate Array of Objects into Multiple Objects in JavaScript 
// How to push an array into the Array of objects  
// How to get distinct values from an array of objects in JavaScript?
// Count occurrences of all items in an array in JavaScript
// Let's use replace() to improve the example above (capitalized the first letter)


//Remove Null Objects from Nested Array of objects in JavaScript

let arr = [
    { id: 1, values: [1, 2, 3] },
    { id: 2, values: [null, 5, 6] },
    { id: 3, values: [7, 8, 9] },
    { id: 4, values: [10, null, 12] },
];

let removeNull = arr.filter(obj=>{
    return obj.values.every(value=>{
        return value !== null;
    })
})

console.log(removeNull);

// check if an object with the same id already exists in the accumulated array.
const array_one = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

const array_two = [
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

const mergeArray = new Map([...array_one,...array_two].map(obj=>[obj.id,obj]));
const mergeing = Array.from(mergeArray.values());

// console.log(mergeing);

//Find the total price from a array obj 

const shoppingCart = [
    {
        "price":10,
        "title":"item1"
    },
    {
        "price":20,
        "title":"item2"
    },
    {
        "price":30,
        "title":"item3"
    },
]

const totalPrice = shoppingCart.map(item=>item.price).reduce((acc,curr)=>acc+curr);

// console.log(totalPrice);


// Remove the Duplicate value from the object Array

function removeDuplicates(){

    books = [
        { title: "C++", author: "Bjarne" },
        { title: "Java", author: "James" },
        { title: "Python", author: "Guido" },
        { title: "Java", author: "James" },
    ];
    
    jsonObject = books.map(JSON.stringify);//conver object to string
    uniqueSet = new Set(jsonObject);// the set method will remove all the dupilcate value 
    uniqueValues = Array.from(uniqueSet).map(JSON.parse) //conver string to object 
    console.log(uniqueValues)

}


// removeDuplicates()




// Merging object arrays with unique values

const arrayOne = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

const arrayTwo = [
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

const mergingArray = new Map([...arrayOne,...arrayTwo].map(obj=>[obj.id,obj]));
const uniqueValuessss = Array.from(mergingArray)

// console.log(uniqueValuessss);

// Get list of Duplicate Objects in an Array of Objects.


const users = [
    { id: 1, name: 'Amit Kumar', email: 'amit@example.com' },
    { id: 2, name: 'Sumit Kumar', email: 'sumit@example.com' },
    { id: 3, name: 'Ami Kumar', email: 'amit@example.com' },
    { id: 4, name: 'Raj Kumar', email: 'raj@example.com' },
    { id: 5, name: 'Amit Kumar', email: 'amit@example.com' }
];

function getDuplicate(arr,key){
    const map={};
    const duplicate =[];

    arr.forEach(item => {
        const keyValue = item[key];
        if(map[keyValue]){
            duplicate.push(item)
        }else{
            map[keyValue] = true;
        }
    });
    return duplicate;
}

const getDuplicates = getDuplicate(users,'email');

console.log(getDuplicates);

//  Separate Array of Objects into Multiple Objects in JavaScript 

const seperateArray = [
    { id: 1, category: "A", value: "apple" },
    { id: 2, category: "B", value: "banana" },
    { id: 3, category: "A", value: "avocado" },
    // ... more objects here
];

const groupObject= {};

seperateArray.forEach(obj=>{
    groupObject[obj.category] = groupObject[obj.category] || [];
    groupObject[obj.category].push(obj);
})

console.log(groupObject);


//Modify an object Prorperty in an array of objects

let employees_data = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
];


employees_data.forEach(item=>{
    if(item.employee_id===2){
     item.employee_name = "Anthony"   
    }
})

console.log(employees_data);

// Get distinct values from an array of objects in JavaScript

const arrayss = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 35 }
];
const namess= {};
const uniqueName = [];


arrayss.forEach(item=>{
    if(!namess[item.name]){
        namess[item.name] = true;
        uniqueName.push(item)
    }
})

console.log(uniqueName);

//How do you flatten an array of arrays 
let nestedArray = [1, [2, [3, [4, 5]]]];
let flatArray = nestedArray.flat(Infinity);
console.log(flatArray);



// Count occurrences of all items in an array in JavaScript

let arr12 = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4,
    'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];

const countValue = {};

arr12.forEach(value=>{
    if(countValue[value]){
        countValue[value] += 1 ;
    }else{
        countValue[value] = 1 ;
     }
})

console.log(countValue);

//In the above program , every() method , chech each and every array elements weather age is >=80 

//Example : Check if all the element of an array is present in another array 

const compareArray = (array1, array2) => array2.every((element) => array1.includes(element));

console.log(compareArray([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(compareArray([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// how to check all elements in array includes in another array javascript
const includesAll = (arr, values) => values.every(v => arr.includes(v));
includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false

// Find Second Largest Element in an Array in JavaScript 

const arrayssss = [10, 5, 20, 8, 15];

const sortArray = arrayssss.slice().sort((a,b)=> b - a);
const secondLargest = sortArray[1];
console.log(` the second Largest number ${secondLargest}`);

// Sum total from array of object properties with reduce method 

const shoppingCarts = [
    {
        "price":10,
        "title":"item1"
    },
    {
        "price":20,
        "title":"item2"
    },
    {
        "price":30,
        "title":"item3"
    },
]

const totalShoppingPrice = shoppingCart.map(item => item.price).reduce((acc,ele)=> acc + ele);

console.log(`the total Shopping Price is ${totalShoppingPrice}`);

// How to push an array into the object in JavaScript 

// JavaScript program to add array into 
// an object using push() function 

// Creating a JS object to add array into 
var Obj = {			 
	arrayOne: ['Geeks', 'for', 'Geeks'], 
	arrayTwo: [] 
}; 

// Array to be inserted 
var arraynew = ['Hello', 'World', '!!!']; 

// Pushing of array into arrayTwo 
Obj['arrayTwo'].push(arraynew);	 

alert(Obj.arrayTwo); 

//Sorting array object properties 

const books = [
    { title: "Book A", year: 2010 },
    { title: "Book B", year: 2005 },
    { title: "Book C", year: 2018 },
  ];
  
  const booksSortedByYearAsc = books.sort((a, b) => a.year - b.year);
  console.log(booksSortedByYearAsc);

  //sorting array value in ASC/DESC order 

  const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

// Ascending Order
numbersArr.sort((a, b) => a - b);
console.log(numbersArr); // Output: [2,3,3,4,5,5,5,6,9,10,21]

// Descending Order
numbersArr.sort((a, b) => b - a);
console.log(numbersArr); // Output: [21,10,9,6,5,5,5,4,3,3,2]


// program to extract value as an array from an array of objects

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

function extractValue(arr,item){
    let extract = arr.map(xy=> xy[item]);
    return extract;
}

const result = extractValue(objArray,'a')
console.log(`the total value of a ${result}`);

// Concat two individual array value with all unique values 

const a = [1,2,4,5]
const b = [2,3,5,7]

const c = a.concat(b)
const d = [... new Set(c)].sort()
console.log(`The concat array value ${d}`);


// Print the key/value of array object 

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  console.log(Object.keys(object1));
  console.log(Object.values(object1));

  // Write a program to check weather the number is even/odd

  function checkoddEven(number){
    if(number % 2 === 0){
        console.log(`It's a even number`);
    }else{
        console.log(`It's a Odd number`);
    }
  }

//   checkoddEven(22)

//Alrenate solution 
function checkNum(numb){
    return numb % 2 === 0 ? `its even number ` : `its odd number `
}
  
// console.log(checkNum(2));

// Write a program to select odd number from array
const arrayNum = [34,1,4,3,77,45,32];
const value = [];
arrayNum.forEach(item=>{
    if(item % 2 === 0 ){
        value.push(item)
    }
    
})

console.log(`You print the ${value}`);


//In the example ,we're checking if our string contains the word 'love' 
let string = 'I love javascript'
let resultss = string.includes('I','javascript')
console.log(resultss)

//Concat() :this method is used to combine two or more strings and return new string 
let string1 = 'I love '
let string2 = 'JavaScript'
let x = string1.concat(string2)
console.log(x);


//Split() :This method divids a string into an ordered list of substrings , puts these substrings into an array and returns the array
let wordss= 'I Love JavaScript'
let y = wordss.split(" ");
let yy=wordss.split(' ');
console.log(y);


//replace(): this method returns a new string with a replacement for some or all the pattern matches  
let word1 = "I love Javascript"
let a1 = word1.replace('love','Adore');
console.log(a1); 

//Write a promises with the delay of 2 sec's 
// Create a function that returns a Promise
let name = "Aunty"
let delay = 2000
function delayedGreeting(name, delay) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Name not provided.");
      }
    }, delay);
  });
}

// Usage
let results = async() =>{
    try{
        let final = await delayedGreeting(name,delay)
        console.log(final)
    }catch(err){
        console.log(err)
    }
}
results();


//let a = [1,2,3,4,5,7,8] b = [1,2,3,6,7,8] O/P [1,2,3,4,5,6,7,8]
const ax = [1,2,4,5]
const bx = [2,3,5,7]
const cx = ax.concat(b)
const dx = cx.filter((item,index,array)=>{
    return array.indexOf(item) === index
})
console.log(dx.sort())


const n1 = [1,2,4,5]
const n2 = [2,3,5,7]
const n3 = n1.concat(n2)
const n4 = [...new Set(n3)]
console.log(n4.sort())

const myData= new Promise((resolve,reject)=>{
  if(OperationCompleted){
    resolve(result)
  }else{
    reject(error)
  }

})


console.log("start of program");// 1 
 
setTimeout(()=>{
    console.log("normal timeout")//2
},0);
 
Promise.resolve().then(()=>{
    console.log("then block directly");
})
 
new Promise((resolve,reject)=>{
    console.log("promise resolved");//3
    setTimeout(()=>{
        console.log("in promise timout");//4
    },0)
}).then(()=>{
    console.log("after resolve then block");
})
console.log("end of program");// last




//Diff btw Rest and Spread Operator ?
//Ex for Rest Operator 
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log("First element:", first); // 1
console.log("Rest of the elements:", rest); // [2, 3, 4, 5]

// Ex : Spread Operator 
const newArr = [5, 6, ...arr];
console.log("New array (after spread operator):", newArr); // [5, 6, 1, 2, 3]








