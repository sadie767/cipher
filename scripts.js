//
//
//
// var sentence = prompt("enter a sentence dammit");
//
// console.log(sentence);
//
// var firstlast = function(sentence) {
//   var first = sentence.charAt(0).toUpperCase();
//   var lastchar = sentence.length-1;
//   var last = sentence.charAt(lastchar).toUpperCase();
//
//   return first + last;
// }
// var end = firstlast(sentence);
// console.log(end);
//
//
// var sentence = prompt("enter a sentence dammit");
//
// console.log(sentence);
//
// var firstlast = function(sentence) {
//   var first = sentence.charAt(0).toUpperCase();
//   var lastchar = sentence.length-1;
//   var last = sentence.charAt(lastchar).toUpperCase();
//
//   return last + first;
// }
// var end = firstlast(sentence);
// console.log(end);

// <<------3rd function------>>>>

// var sentence = prompt("enter a sentence dammit");
//
// console.log(sentence);
//
// var firstlast = function(sentence) {
//   var first = sentence.charAt(0).toUpperCase();
//   var lastchar = sentence.length-1;
//   var last = sentence.charAt(lastchar).toUpperCase();
//
//   return first + last;
// }
// var end = firstlast(sentence);
// console.log(end);
//
// var firstlast = function(sentence) {
//   var first = sentence.charAt(0).toUpperCase();
//   var lastchar = sentence.length-1;
//   var last = sentence.charAt(lastchar).toUpperCase();
//
//   return last + first;
// }
// var end = firstlast(sentence);
// console.log(end);
//

// <<------4th function------>>>>
//
// var sentence = prompt("enter a sentence dammit");
//
// console.log(sentence);
//
// var firstlast = function(sentence) {
//   var first = sentence.charAt(0).toUpperCase();
//   var lastchar = sentence.length-1;
//   var last = sentence.charAt(lastchar).toUpperCase();
//
//   return first + last;
// }
// var end = firstlast(sentence);
// console.log(end);
//
// var firstlast = function(sentence) {
//   var first = sentence.charAt(0).toUpperCase();
//   var lastchar = sentence.length-1;
//   var last = sentence.charAt(lastchar).toUpperCase();
//
//   return sentence + last + first;
// }
// var end = firstlast(sentence);
// console.log(end);
//

// <<------4th function------>>>>

var sentence = prompt("enter a sentence dammit");

console.log(sentence);

var firstlast = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var lastchar = sentence.length-1;
  var last = sentence.charAt(lastchar).toUpperCase();

  return first + last;
}
var end = firstlast(sentence);
console.log(end);

var firstlast = function(sentence) {
  var first = sentence.charAt(0).toUpperCase();
  var lastchar = sentence.length-1;
  var last = sentence.charAt(lastchar).toUpperCase();
  var total = sentence.length;
  var target = Math.floor((total)/2);
  var letter = sentence.charAt(target);

  return letter + sentence + last + first;
}
var end = firstlast(sentence).split("").reverse().join("");

console.log(end);
