/*
	The following 2 constant arrays are lists of the most popular boys and girls names in 2017.  The lists are converted to all uppercase letters to make unscrambling easier.
*/
GIRL_NAMES = ['Sophia', 'Olivia', 'Emma', 'Ava', 'Isabella', 'Mia', 'Aria', 'Riley', 'Zoe', 'Amelia', 'Layla', 'Charlotte', 'Aubrey', 'Lily', 'Chloe', 'Harper', 'Evelyn', 'Adalyn', 'Emily', 'Abigail', 'Madison', 'Aaliyah', 'Avery', 'Ella', 'Scarlett', 'Maya', 'Mila', 'Nora', 'Camilla', 'Arianna', 'Eliana', 'Hannah', 'Leah', 'Ellie', 'Kaylee', 'Kinsley', 'Hailey', 'Madelyn', 'Paisley', 'Elizabeth', 'Addison', 'Isabelle', 'Anna', 'Sarah', 'Brooklyn', 'Mackenzie', 'Victoria', 'Luna', 'Penelope', 'Grace'];
for (var i = 0; i < GIRL_NAMES.length; i++)
	GIRL_NAMES[i] = GIRL_NAMES[i].toUpperCase();

BOY_NAMES = ['Jackson', 'Liam', 'Noah', 'Aiden', 'Lucas', 'Caden', 'Grayson', 'Mason', 'Elijah', 'Logan', 'Oliver', 'Ethan', 'Jayden', 'Muhammad', 'Carter', 'Michael', 'Sebastian', 'Alexander', 'Jacob', 'Benjamin', 'James', 'Ryan', 'Matthew', 'Daniel', 'Jayce', 'Mateo', 'Caleb', 'Luke', 'Julian', 'Jack', 'William', 'Wyatt', 'Gabriel', 'Connor', 'Henry', 'Isaiah', 'Isaac', 'Owen', 'Levi', 'Cameron', 'Nicholas', 'Josiah', 'Lincoln', 'Dylan', 'Samuel', 'John', 'Nathan', 'Leo', 'David', 'Adam'];
for (var i = 0; i < BOY_NAMES.length; i++)
	BOY_NAMES[i] = BOY_NAMES[i].toUpperCase();

/*
	initializeBaby
	
	Chooses a random baby name from one of the lists above.  There is a 50-50 chance that the baby will be a boy or a girl.
	
	Returns
		The name of the baby.
*/
function initializeBaby()
{
	var babyName = "";
	
	if (Math.random() < 0.5)
	{
		babyName = GIRL_NAMES[getRandomInteger(0, GIRL_NAMES.length - 1)];
	}
	else
	{
		babyName = BOY_NAMES[getRandomInteger(0, BOY_NAMES.length - 1)];
	}
	
	return babyName;
}

/*
	scrambleName
	
	Takes a baby name and scrambles all of the letters.
	
	Parameters
		babyName - The name to be scrambled.
		
	Returns
		The baby's scrambled name as a string.
*/
function scrambleName(babyName)
{
	//A split with an empty string as the delimiter will split all of the characters in the string.
	var babyArray = babyName.split("");
	
	var scrambledBaby = "";
	
	while (babyArray.length > 0)
	{
		var idx = getRandomInteger(0, babyArray.length - 1);
		
		//splice always returns an array.
		//Even if you're only splicing out 1 item, that item is at index 0.
		scrambledBaby += babyArray.splice(idx, 1)[0];
	}
	
	return scrambledBaby;
}

/*
	getNewBaby
	
	Facilitates the creation of a scrambled baby name.
	
	Returns
		A scrambled baby name.
*/
function getNewBaby()
{
	return scrambleName(initializeBaby());
}