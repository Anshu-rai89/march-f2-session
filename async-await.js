

// Every async function returns a promise object which will be either resolved or rejected after time time

async function add(a, b) {
  return a + b;
} 

async function ExecuteAdd() {
    console.log("Heyyy");
    var res = await add(4, 5);
    console.log(res);
}

ExecuteAdd(); // New FUnction Execution COntext 

console.log(res);

console.log("hello");
var a = 10; 
while(a < 100) {
    console.log(a);
    a++;
}

