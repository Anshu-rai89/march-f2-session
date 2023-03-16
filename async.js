/** Task to complete
 * 
 *  1 I want to fetch user image 
 *  2 I want to change the background color of website 
 *  3 I want to show a hello message to user 
 * 
 */

// Gets the  image of user from internet 
// This on avg takes around 40s
// function fetchUserImage () {
//     var image = getImageFromServer();
//     console.log("Image is downloaded");
// }

// //1s
// function changeColor() {
    
// }

// //1ms
// function logHello() {
//     console.log('hello');
// }

// // ASync programming
// fetchUserImage(); // 3s 
// changeColor(); //1s
// logHello(); //1ms

// You want to print a hello world message after 3 second

// You have to print hello world after 3 second 
// You have to print I am getting executed 2 second after hello
// Callback hell -> IMP Multi level nesting of callback function due to async function 
//call
// It become difficult to understand the code
// Difficult to debug
// Difficult to maintain 
// What is async programming ? 
// what are disadvantage of syn programming and what are the advantage of asyn programming 
// what are callback functions and how do they work in async programming 
// what are callback hell ? What all problems callback hell create
setTimeout(function () {
  console.log("hello world");
  setTimeout( function () {
    console.log("I am getting executed 2 second after hello world");
    setTimeout( function () {
        console.log("& second after previou log");
    },
    7000);
   
  }
    , 2000);
}, 3000);
console.log("Hi");
