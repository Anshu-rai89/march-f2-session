var start = 1;
var end = 100;
var step = 1;

// while(start <= end) {
//     console.log(start);
//     start = start + step;
// }

var output = "";
for(var counter = start; counter <= end; counter++) {
    output += counter;
    output += " ";
}
console.log(output);