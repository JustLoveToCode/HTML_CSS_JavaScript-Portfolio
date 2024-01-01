// Getting the container from the HTML:
const container=document.getElementById('container')
// Getting the Arrays for the Different Colors:
const colors=['#008000','#800080', '#FF0000', '#FFFFFF','#FFFACD'];

// Getting 500 SQUARES here
const SQUARES=500;


// Creating the 500 squares in the container inside
// by using the for loops as the number of squares is not infinite
for(let i=0; i<SQUARES; i++){
    // Creating the element of div, you can create anything
    // that you want.
    const square=document.createElement('div');
    // Adding the classList of square
    square.classList.add('square');
    // Adding the addEventListener called mouseover:
    // This will add the color using the setColor Function:
    square.addEventListener('mouseover',()=>setColor(square))
    // Adding the addEventListener called mouseout:
    // This will remove the color using the removeColor Function:
    square.addEventListener('mouseout',()=>removeColor(square))
    // Appending the square to the container
    container.appendChild(square);
}

// Function to get the color
function setColor(square){
    const color=getRandomColor()
    // Change the style of the background
    square.style.background=color
    // Changing the style of the box shadow
    square.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}


// Function to remove the color
function removeColor(square){
    // Changing the style of the background
    square.style.background= '#1d1d1d';
    // Changing the style of the boxShadow
    square.style.boxShadow='0 0 2px #000';
}



// Getting the random color from the Arrays of the Color above
// Using the math.random() method and using colors.length to get
// the random color, colors.length is the length of the Array:
function getRandomColor(){
return colors[Math.floor(Math.random()*colors.length)] 
}