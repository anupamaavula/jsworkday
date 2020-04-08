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