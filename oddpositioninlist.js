
// 14.Write a function that returns the elements on odd positions in a list.

var array = [1,2,3,4,5,7,8,9,22,12,22,23,24];
console.log(array.filter(function(el, ind){
  return ind % 2 === 0;
}));


// The filter() method creates an array filled with all array elements that pass a test (provided as a function).