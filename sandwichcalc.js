function sandwichCalc(slicesOfBread,slicesOfCheese)
{
	var sandwiches = Math.floor(slicesOfBread / 2);
	
	if ((slicesOfBread>1) && (slicesOfCheese>0)&&(slicesOfCheese<sandwiches))
		{
			sandwiches=slicesOfCheese;
			console.log(sandwiches);
			return sandwiches;

		}
		else if ((slicesOfCheese>=sandwiches)&&(slicesOfBread>1))
		{
		   console.log(sandwiches);
		   return sandwiches;

		}	
		else if((slicesOfCheese=0)||(slicesOfBread<2))
		{
			console.log("No Sandwich available");
			return 0;
		}
}
sandwichCalc(10,2);


