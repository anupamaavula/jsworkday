// 24.Write a function that takes a number and returns a list of its digits. So for 2342 it
// should return [2,3,4,2].



var num = 123456123;
var digits = num.toString().split('');
var rDigits = digits.map(Number)
console.log(rDigits);
