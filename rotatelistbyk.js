
// 22.Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
// rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of
// the list. How many swap or move operations do you need?


const lst = [1, 2, 3, 4, 5, 6];
const rotateBy = 2;
const rotate = (lst, rotateBy) => [...lst.slice(rotateBy % lst.length), ...lst.slice(0, rotateBy % lst.length)];

console.log(rotate(lst, rotateBy));


// Need to understand more on this code.Took it from goolge