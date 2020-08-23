function getVaultCombo(lower, upper, digits)
{
	var comp = "";
	for (i = 0; i < digits; i++)
	{
		//R = parseInt(rnd * (upper - (lower - 1)) + lower
		multiplier = upper - (lower - 1);
		rnd = parseInt(Math.random() * multiplier) + lower;
		var n = rnd.toString();
		comp += n;		
	}
	return comp;
}
function getRandomInteger(lower, upper)
{
	//R = parseInt(rnd * (upper - (lower - 1)) + lower
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}
