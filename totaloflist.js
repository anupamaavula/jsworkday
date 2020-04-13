// 15.Write a function that computes the running total of a list.


let myarray=[2,3,4,5,6,1,0];
var new_array = myarray.concat(); 

for (var i = 1; i < myarray.length; i++) {
  new_array[i] = new_array[i-1] + myarray[i];
}

console.log(new_array);