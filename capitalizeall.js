// Exercise - Capitalise every element
// 1. Write a short function to capitalise every element of the array.
// 2. You must use the Array#map function and the String#uppercase function.


// This is the code done by me
let name=['Aaa','abc','anu'];

console.log("Array :"+name);


function capitalize(name)
{
	var newname=[];

	for (var i=0;i<name.length;i++)
	{
		newname.push(name[i].charAt(0).toUpperCase()+name[i].slice(1));
	}
	 return newname.join(' ');

};
name=name.map(capitalize);
console.log("Capitalised Array :"+name);



// This is the code explained in class
// var myArray=['rat','bat','cat'];


//  var newArray=myArray.map(function(arr){
//  	return arr.toUpperCase();

//  });
// console.log(newArray);