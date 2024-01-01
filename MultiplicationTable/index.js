const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)

const questionEl=document.getElementById('question');

const formEl=document.getElementById("form");

const inputEl=document.getElementById('input');

const scoreEl=document.getElementById('score');


// Using the localStorage.setItem Method to set the Score
function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


let score= JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

// Getting the innerText using JavaScript
// and set the score using ${score} Function:
scoreEl.innerText=`score: ${score}`

questionEl.innerHTML=`What is ${num1} multiply by ${num2}?`

//Comparing the user answer with your answer.
const correctAns =  num1*num2;

formEl.addEventListener('submit', ()=>{
// inputEl.value select the Current Value that 
// is inside the inputEl which is the HTML input element:
    const userAns= +inputEl.value
    if(userAns===correctAns){
        score++
        updatelocalStorage()
    } else {
        score--
        updatelocalStorage()
    }
});


//For Javascript:
//We use id.


//Math.ceil(): it will always round up the number itself.
//Math.random(): it will return the floating-point, pseudo-random
//number in the range from 0 to less than 1( inclusive of 0, less than 1)
//Math.random()*10: what this function is actually doing is that it will take any random number from 0 to 9
//and excluding 10 as the whole number.

//Math.max() function will return the largest of the 0 or more
//numbers given as input parameter or NaN, if any parameters
//is not a number, Note that NaN mean Not A Number and cannnot
//converted to one of them.

//Use const num1 to define the first number to be multiplied to.
//Use const num2 to define the second number to be multiplied to.
//In this case, you will now get 2 random numbers that is to be multiplied together.

//In order to get a particular elements into Javascript and change it.
//We will need to use const questionEl to define it followed by
//const questionEl= getElementById('question'); in this case, the 'question' is taken from the HTML document itself, hence you will need to put "question" for the quotations.

//To display the result, we will need to use innerHTML code.

//We want to get the form, hence we will also use
//const FormEl=document.getElementById("form"); to extract the form element from HTML to Javascript.

//To listen to any form of input and submission by the user:
//You can use formEl.addEventListerner('submit', ()={
/*
    const userAns=inputEl.value
    console.log(userAns, typeof userAns); 
    (Note:This is to track whether the input will be string or number in the console.log itself.)
})
*/

/* Converting a String into a Number
To convert the String into a Number, we add a '+' in front
to convert it into Number.
*/

/* In order to store the score inside, you will need to use:
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify('score))
}

The reason why you need to do the above is because everytime you refresh the page, it will result in the page being refreshed again and again and hence the score is not stored properly.
*/

//In order to store the score and increased it accordingly:
//let score=JSON.parse(localStorage.getItem("score"));

//This function will also convert the number to string in order to
//store the value inside the localStorage, this can be easily done
//using the JSON.parse function.
