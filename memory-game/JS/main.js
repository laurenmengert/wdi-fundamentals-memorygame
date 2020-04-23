console.log("Up and running!");

//console.log ("User Flipped" + " " + cardOne);
//console.log ("User Flipped" + " " + cardThree);

let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [ ];

let cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log('User flipped queen');

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log('User flipped king');

if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
} else if {
	alert('Sorry, try again');
};

//Next we'll add logic to check to see if two cards have been played, because in our final game we will 
//not want to check for a match until the user has selected two cards.

//Write an if statement that checks to see if the length of the cardsInPlay array is 2.
//For the condition, you can use the length property to find out how many items are in the cardsInPlay array 
//and then use the === operator to see if the length is equal to 2.


//Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay array.
//Inside of the if statement you created in the last step, create an if...else statement that checks for equality 
//between the two cards in the cardsInPlay array.
//For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second
//ard in the cardsInPlay array.
//HINT: You'll want to use the === operator here.

//If values are equal, execute an alert with the message "You found a match!"
//alert("You found a match!");
//If values are not equal, execute an alert with the message "Sorry, try again."

//After saving your main.js file, open the index.html file in Sublime Text, right click, and open the project in 
//Chrome. The alert "Sorry, try again." should pop up.

//Test out storing different cards in the cardOne and cardTwo variables to make sure that everything is up and running!