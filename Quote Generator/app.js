//Variables


let btn = document.querySelector('#new-quote');

let quote = document.querySelector('.quote');


let person=document.querySelector(".person");


//Creating the Arrays for all our quotes
//This is the Objects inside the Array:
const quotes=[{ 
  quote: `"The Best way to find yourself is to lose yourself
in the service of others."`,
person: `Mahatma Gandhi`},


 { quote: `"At his best, man is the noblest of all animals; separated
  from law and justice he is the worst."`,
  person: `Albert Einstein`},];

//Event Listener and using Random Number
//When the Button is clicked, it will get the Random
//Quote from the Array:
  btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);


// The random here refer to the Variable here that
// is actually changing, since it is an object with the person and quote.
// Use Dot Notation to set the Property:
quote.innerText= quotes[random].quote;
person.innerText= quotes[random].person;
})


//Math.floor in JavaScript:
//Math.floor will round down to the nearest integer.

//Math.random in JavaScript:
//Hence, in this case, the //Math.random will return a random number
//which is inclusive of 0 up to but not including 1(exclusive).
//and then you multiply by the quote length.

// length in Array in JavaScript:
//This set the length of the array, this is a number 1 higher
//than the highest array in javascript















































