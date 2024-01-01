const container = document.getElementById('container');
const colors = ['#008000','#800080', '#FF0000', '#FFFFFF','#FFFACD'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    // Creating the element div here
    const square = document.createElement('div');
    // Adding the classList of square
    square.classList.add('square');
    // AddEventListener of mouseover
    square.addEventListener('mouseover', () => setColor(square));
    // AddEventListener of mouseout
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}



function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}