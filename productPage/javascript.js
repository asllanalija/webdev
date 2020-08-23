TITLE = 0, IMAGE = 1, DESCRIPTION = 2, PRICE = 3, ELEMENT = 4;

MAXITEMS = 10;

SIZES = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
COLORS = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "PURPLE", "BLACK", "GRAY", "WHITE"];
PROPERTIES = ["Size", "Color", "Quantity"];
DELIMITER = "**";
ITEMS = ["Mad Libs**intro_logo.png**ote: this solution is good to align any element within any element. for IE7, when applying the .Centered class on block elements, you will have to use another trick to get the inline-block working. (that because IE6/IE7 dont play well with inline-block on block elements)**$55**sizes**colors**quantity"];


function createElements()
{
	sizes = document.createElement("select");
	sizes.name = "sizeBox";
	colors = document.createElement("select");
	colors.name = "colorBox";
	quantity = document.createElement("select");
	quantity.name = "quantityBox";
	propertyElements = [sizes, colors, quantity];

	for (i = 0; i < PROPERTIES.length; i++)
	{
		var option = document.createElement("option");
		option.value = "";
		option.selected = "selected";
		option.innerHTML = "Choose " + PROPERTIES[i];
		option.setAttribute("disabled", "");
		option.setAttribute("hidden", "");
		propertyElements[i].appendChild(option);		
	}
	for (i = 0; i < SIZES.length; i++)
	{
		var option = document.createElement("option");
		option.value = SIZES[i];
		option.innerHTML = SIZES[i];
		sizes.appendChild(option);
	}
	for (i = 0; i < COLORS.length; i++)
	{
		var option = document.createElement("option");
		option.value = COLORS[i];
		option.innerHTML = COLORS[i];
		colors.appendChild(option);
	}
	for (i = 1; i < MAXITEMS + 1; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		quantity.appendChild(option);
	}
}
	