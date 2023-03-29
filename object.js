// Different ways to create object 

var obj = {}; // Js creates an empty object for you internally
console.log(obj);

var obj1 = new Object();
// Whenever we have to store a collection of data in key value pair 
// Students details 
// {name: Rahul , class: V}, {name: Simran, class: Vi}
// ["rahul", "simran"]
// key: value

var student = {};
student.name = "Rahul";
student.class = "vii";

// Access a value of a key in object
// dot notation
// static value of key 
console.log(student.key);
console.log(student.class);

var key = "class";
// square notation
console.log(student[key]);
student.age = 24;
student["isStudent"] = true;


console.log(student);

// delete age from student object
delete student["age"]; 
// delete student.age

console.log(student);

student.address = { country: "india", state: "UP"};
console.log(student);
console.log(student.address.country); // nested object key


// var arr = [{name: "Anshu", class: "V"}, {name: "Rahul", class: "IX"}];

// console.log(arr[0]["name"]);

// var arr = [1,"abc", true, {name: "rahul"}, [1,2,3]]
// console.log(arr[4]);
// console.log(Array.isArray(arr[4]));

// Given a student object print its all keys and value

var user = {id: "1", email: "abc@gmail.com"};
// Find all keys of object
var studentKeys = Object.keys(student);
var userKeys = Object.keys(user);
console.log(studentKeys);
console.log(userKeys);

// Iterate on the array of keys
studentKeys.forEach((key) => console.log(key, student[key]));


// Given an object print all its values
// {name: 'Anshu' , age: 24} -> Anshu , 24
var studentValues = Object.values(student);
console.log(studentValues);

// {name: 'Anshu' , age: 24} [[name, "anshu"], [age, 24]]
var entrys = Object.entries(student);
console.log(entrys);

entrys.forEach(entry=> console.log(entry[0], entry[1]));


addEventListener