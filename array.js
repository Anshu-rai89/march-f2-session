var books = ["rs agarwal", "rd sharma", "chemistry"]; // Homogenies data
console.log(books);
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// find the size of array
var size = books.length;
console.log(size);

// Empty array using new keyword
var marks = new Array(10);
console.log(marks);
console.log(marks.length);

//How arrays are different in JS world
var arr1 = ["rahul", 25, false, 10.23]; // Heterogenous data
console.log(arr1);

//How to add element in a array at the end
arr1.push("rd sharma", "maths");
console.log(arr1);

// How to add element at the start of array
arr1.unshift("rs agrawal", 23, 45, true);
// console.log(arr1);
// console.log(arr1.length);

arr1[5] = "new value";
console.log(arr1);

arr1[12] = "random data"; // js will create an array with size 13 
// at index 7, 8, 9, 10, 11 -> js will add undefined
console.log(arr1);
console.log(arr1.length);

// How to delete data from end
arr1.pop();
// console.log(arr1);
// console.log(arr1.length);

// How to delete from the start
arr1.shift();
console.log(arr1);
console.log(arr1.length);

// How you can remove item from any index
//[23, 45, true, "rahul", "new value", false, 10.23, "rd sharma", "maths"];
// [23, 45, true, "rahul", "simran","ankit", 26, 10.23, "rd sharma", "maths"]
// Index of data you want to delete 

arr1.splice(4,0,"simran","ankit",26);
console.log(arr1);
console.log(arr1.length);

// splice(index of data which needs to be delete, no of items that need to be deleted, items to be added );

var marks = [23,45,67,89];
var markscopy = marks; // We should create a copy using spread operator 

markscopy.push(98);
marks.push(100);
console.log(markscopy);
console.log(marks);
console.log(marks === markscopy);

var arr1 = [];
var arr2 = [];

console.log(arr1 === arr2);


// How we can iterate on arrays values
// In array the value of indexes can be from 0 ----- size -1

// for(var index = 0 ; index < marks.length ; index++) {
//     console.log(marks[index]);
// }

for( var value of marks) {
    console.log("using off", value);
}

for( var index in marks) {
    console.log("using in",index, marks[index]);
}

// forEach -> Higher order function 

// function
function abc(value,index)
{
    console.log(index, value);
}

// For each goes to every index of array reads the index and value and calls logArrayItems
// logArrayItems(index, value);
// [23,45,67,89, 98, 100]

marks.forEach(abc);

function forEach2(fn) {
    var size = marks.length;
    for(var index = 0 ; index < size; index++) {
        fn(marks[index], index);
    }
}

forEach2(abc);


var arr1 = [1,3,4,5,9, 11, 45];

var index = -1;

for(var i in arr1) {
    if(arr1[i] === 9) {
        index = i;
        break;
    }
}

console.log(index);
var index1 = arr1.findIndex(function (value) { return value === 11});
console.log(index1);

arr1.sort(function (a,b) { return a-b}); // Ascending order;

