// firstReverse function that takes a single string parameter and returns the string in reverse order.

var firstReverse = function(string){ 

	var string = 'Hello, my name is Laura.';
	
	return string.split("").reverse().join("");
}
firstReverse(string);


// Write a function swapCase that takes a single string parameter and swaps the case of each character.

var swapCase = function(string) {
	
	var newLetter = "";
	
	for (var i = 0; i < string.length; i++) {
		if(string[i] === string[i].toLowerCase()) {
			newLetter += string[i].toUpperCase();
		} else {
			newLetter += string[i].toLowerCase();
		}
	}
	return newLetter;
}

var sentence = "Hello, mY nAme Is Laura.";
swapCase(sentence);


