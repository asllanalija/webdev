function checkHTMLFormat(code)
{
	var codeStack = [];
	
	do
	{
		//Get the tag.
		var tag = extractTag(code);
		
		if (tag == null)
			return false;

		/*
			If it's an opening tag, push it onto the stack.
				Otherwise
			If the closing matches the top one on the stack, pop it off.
		*/
		if (isOpeningTag(tag))
			codeStack.push(tag);
		else
		{
			if (tagsMatch(codeStack[codeStack.length - 1], tag))
				codeStack.pop();
			else
				//Non-matching tags is bad code.
				return false;
		}

		//Move onto the next piece of code.
		code = code.substring(code.indexOf(tag) + tag.length, code.length);
	} while (codeStack.length > 0);
	
	return true;
}

function extractTag(code)
{
	//Opening angle bracket
	var nextTag = code.indexOf("<");
	if (nextTag < 0)
		return null;
	
	//Closing angle bracket
	var close = code.indexOf(">");
	
	if (close < 0)
		return null;
	
	return code.substring(nextTag, close + 1);
}

function isOpeningTag(tag)
{
	return tag[1] != "/";
}

function tagsMatch(opening, closing)
{
	opening = opening.substr(1, 2);
	closing = closing.substr(2, 2);
	
	return opening == closing;
}