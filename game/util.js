Context = 
{
	canvas : null,
	context : null,
	create : function(canvas_tag_id)
	{
		this.canvas = document.getElementById(canvas_tag_id);
		this.context = this.canvas.getContext("2d");
		return this.context;
	}
};
Sprite = function(filename, is_pattern)
{
	this.image = null;
	this.pattern = null;
	if (filename != undefined && filename != "" && filename != null)
	{
		this.image = new Image();
		this.image.src = filename;
		if (is_pattern)
		{
			this.pattern = true;
		}
	}
	else
		console.log("unable to load sprite.");
						
	this.draw = function(x, y, w, h)
	{
		if (this.pattern != null)
		{
			//pattern
			/*if (this.image.width % w != 0 && w > this.image.width)
			w = Math.floor(w/this.image.width)*this.image.width;*/
			Context.context.fillStyle = Context.context.createPattern(this.image, "repeat");
			Context.context.fillRect(x, y, w, h);
		}
		else
		{
			if (w != undefined && h != undefined)
			{
				//image
				Context.context.drawImage(this.image, x, y, w, h);
			}
			else
			{
				//stretched
				Context.context.drawImage(this.image, x, y, this.image.width, this.image.height);
			}
		}
	};
}
function getRandomInteger(lower, upper)
{
	//R = parseInt(rnd * (upper - (lower - 1)) + lower
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}