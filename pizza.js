var pizzaToppings=['Cheese','Pepperoni','Garlic','Pepper'];
console.log(pizzaToppings);

function orderPizza(name)
{
	var name ='';
	for(var i=0;i<pizzaToppings.length;i++)
	{
		 name = name +' and '+ pizzaToppings[i];

		

	}
	console.log('A delicious pizza with '+name);
	return (name);
}
orderPizza();
	
