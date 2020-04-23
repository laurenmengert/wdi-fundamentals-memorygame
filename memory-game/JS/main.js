console.log("Up and running!");

//console.log ("User Flipped" + " " + cardOne);
//console.log ("User Flipped" + " " + cardThree);

let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [ ];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
} else {
	alert('Sorry, try again');
	}
}

function flipCard(cardID) {
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardID]);

if (cardsInPlay.length === 2) {
	checkForMatch()
	}
}


flipCard(0);
flipCard(1);


//In your main.js file, after the lines with the cards and cardsInPlay arrays, create a 
//function flipCard.
//The function should accept one parameter: cardId.
//Move all the code that you wrote for the last unit's assignment, except for the cards and 
//cardsInPlay arrays into the flipCard function.
//NOTE: We are leaving the two arrays outside of the flipCard function since we want to make
// sure that the two arrays have global scope.

//Within the flipCard function, add a console.log() statement to display the card that was flipped over.
//We'll use the index number that is passed in when the flipCard function is called to access this card 
//from the cards array like so: cards[cardId].
//The message that is logged in the console should read "User flipped queen" or "User flipped king".
//HINT: Use string concatenation inside of the console.log() statement to construct this message.

//Next, we'll want to add the card that the user flipped to the cardsInPlay array.

//Use the push method to add the card that the user flipped (cards[cardId]) to the cardsInPlay array.
//Now let's call the flipCard function to simulate the user flipping a card.

//On the line after the flipCard function, call the flipCard function, passing in 0 as an argument.
//NOTE: we'll want to make sure to call the flipCard after it has already been defined, or we will get an error.

//Now, on the next line, call the flipCard function again, passing in 2 as an argument.
//These numbers we are passing in as arguments represent the index numbers of the cards in the cards array that we want
 //to flip over.
//Save your main.js file, open the index.html file in Sublime, right click, and open the project in Chrome. Then 
//navigate to the console and check to make sure that the "User flipped queen" and "User flipped king" messages are 
//displayed.

//Right below the cardsInPlay array and right above the flipCard function, create a function checkForMatch. This
//function will not have any parameters. This is where I moved the if statements