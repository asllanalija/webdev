CODED_MESSAGES = "22Agent Green is in position.;3The blue dog is on the catwalk.;10Jackson, wearing a yellow tuxedo, is late to the party.;17Agent 99 will be waiting in a red sedan on the drive leading to the blue lagoon.;9The yellow jacket doesn't fit.;4Red alert!  Red alert!;6Roses are red, violets are deadly.;11The colorless photo shows not only black and white, but shades of grey as well.;12If you see red then you're seeing things just as you should.;1Red;7Red Orange Yellow Green Blue Indigo Violet;86The pickup will be made by Agent 86 in a yellow van.;36See out the figure in the blue cloak.;6Seek out the figure in the yellow cloak.;8Seek out the figure in the red cloak.;315When the 3:15 comes through the station, look for something blue.";
function getRandomInteger(lower, upper)
{
	//R = parseInt(rnd * (upper - (lower - 1)) + lower
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}
