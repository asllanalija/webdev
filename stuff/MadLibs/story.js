DELIMITER = "**";
STORIES = ["One day, **capital** while trying to fix my **noun**, I came across a **adjective** **noun**.  I **adverb** scooped it up and put it into my pocket.  Not really knowing what to do with it, I **verb** home and put it into my **noun**.  All of a sudden, I was transported to this **adjective** place, but my adventure there is a tale for another **noun**.", "The **noun** came **verb-ending-in-ing** out of the sky like a bat out of **noun**.  No one in the **noun** had ever seen anything like it.  Most of us were **adjective** in place by the **adjective** spectacle, but I had the sense to **verb** for **noun**.  Maybe I'm a **noun**.  Maybe I've got **adjective** instincts.  All I know is that, when it was all over, I was the last **noun** left **adjective**.  Everyone else had been **verb-past-tense** to a **noun**.", "The first time **adjective** Timmy ever rode a **noun**, he was so **verb-past-tense**.  He **adverb** pulled himself up into the saddle.  His feet didn't even **verb** all the way to the **noun**.  Holding on for **adjective** life, he kicked the **noun** into action.  It began to **verb**, then **verb**, then **verb**.  **verb-ending-in-ing**, Timmy **verb-past-tense** his eyes in fear.  When the **noun** stopped and he dared look, Timmy found himself in a completely **adjective** world."];
wordTypes = ["noun", "adjective", "adverb", "verb", "verb-ending-in-ing", "verb-past-tense"];

function getRandomInteger(lower, upper)
{
	//R = parseInt(rnd * (upper - (lower - 1)) + lower
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}