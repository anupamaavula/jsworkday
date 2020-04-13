
// 20.Write a function that combines two lists by alternatingly taking elements, e.g.
// [a,b,c], [1,2,3] → [a,1,b,2,c,3].



function splicer(array, element, index) {
    array.splice(index * 2, 0, element);
    return array;
}

function weave(array1, array2) {
    return array1.reduce(splicer, array2.slice());
}

let array1 = ["a", "b", "c", "d"];
let array2 = [1, 2];

let outcome = weave(array1, array2);

console.log(outcome);