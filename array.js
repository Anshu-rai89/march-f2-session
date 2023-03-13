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

arr1[12] = "random data";
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
