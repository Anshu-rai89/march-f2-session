var s = "abcz";

// size of string
var size = s.length;
console.log(size);

// Strings are arrays of character 
// ['a','b', 'c']

console.log(s[1]);

// Returns the character that is present on given index or position
console.log(s.charAt(2)) // b

// Returns the asci code of a character present on a index
console.log(s.charCodeAt(3)); // 122 (asci code of z)

// If you have to add/concatenate two strings 
var s1 ="xyx";
console.log(s1 + s); //xyxabcz
console.log(s1.concat(" ",s)); //xyx abcz

// If you want to check if yours string ends with some other string
// I am learning strings in session
 var str = "I am learning, strings in, session"
 console.log(str.endsWith('in')); //false
 console.log(str.startsWith("I a")); // true


 // Check if a substring is present or not in a string
 console.log(str.includes("ing")); // true

 // How you can find index of subtring
 console.log(str.indexOf("ing")); // 10
 console.log(str.indexOf("xyz"));
 console.log(str.lastIndexOf("ing"));

 // Given a sentence return all its words
 // ["I", "am", "learning", "in", "session"]
 console.log(str.split(",")) //[i,a,m,l]

 // You need to remove all commas from string
 console.log(str.replace(",", "")); // How we can remove all commas using replace
 console.log(str.replaceAll(",", ""));

 // You want to generate a substring of string
 //I am learning, strings in, session
 console.log(str.substring(2,13)); //am learning

 var str1 = "  xyx  pqr  ";
 console.log(str1.trim()); //xyx pqr;

 var str2 = "This is a sample string which is good. IS  Is, iS";
 // I want to find all occurrences of is
 var regex = /is/gi;
 console.log(str2.match(regex).length); //6

console.log(str);
console.log(str.replace(/,/g, ""));


