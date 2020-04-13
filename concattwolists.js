// 19.Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]

var arr1 = ['a','b','c'];
var arr2 = [1,2,3];
arr1.push.apply(arr1,arr2);//The apply() method takes arguments as an array.
console.log(arr1);