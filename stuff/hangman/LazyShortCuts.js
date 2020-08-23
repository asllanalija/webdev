// This will be the constants for Hangman

WORDS = ["andrew, Sandra, Asllan"];
for (var i = 0; i < WORDS.length; i++)
	{
		WORDS[i] = WORDS[i].toUpperCase();
	}





















// This will give you a random whole number between two given values
	function getRandomInteger(lower, upper)
	{
		multiplier = upper - (lower - 1);
		rnd = parseInt(Math.random() * multiplier) + lower;
		
		return rnd;
	}
