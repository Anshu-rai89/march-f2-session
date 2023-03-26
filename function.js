
var d;
console.log(d);
d = 90;


console.log(exp);

//Function Expression

// A function which do not have any name are called anonymous function
var exp = function(a, b = 9) {
  var sum = a + d;
  return sum;
};



console.log(typeof exp);
console.log(exp(4,9));

exp = 90;
console.log(typeof exp);




//console.log(exp(4));

// var res = add(4);
// console.log(res);

// Arrow function
var exp = (a, b = 9) => {
  var sum = a + d;
  return sum;
};

console.log(exp(5,8));

((a,b) => a+b)(4,6);


var a = 90;
function getUserAgeFunction() {
    var age = 24;
    var name = "Rahul";

    function getAge() {
        ++age;
        console.log(name);
        return age;
    }
   
    return getAge(); // 25
}


var ageFunction = getUserAgeFunction();  //{function getAge() {  return age;}   age = 24}
      

console.log(ageFunction);
console.log(ageFunction());
console.log(ageFunction());
console.log(a);