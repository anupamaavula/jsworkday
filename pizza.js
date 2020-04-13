// var pizzaToppings=['Cheese','Pepperoni','Garlic','Pepper'];
// console.log(pizzaToppings);

// function orderPizza(name)
// {
// 	var name ='';
// 	for(var i=0;i<pizzaToppings.length;i++)
// 	{
// 		 name = name +' and '+ pizzaToppings[i];

		

// 	}
// 	console.log('A delicious pizza with '+name);
// 	return (name);
// }
// orderPizza();




// This is different process explained by Kaley by using join
var pizzaToppings=['Cheese','Pepperoni','Garlic','Pepper'];
function pizza()
{
	var addToppings=pizzaToppings.join(' and ');
	return addToppings;
	// return "A delecious pizza with"+addToppings;this is another way to write

};
console.log("A delecious pizza with "+pizza());
