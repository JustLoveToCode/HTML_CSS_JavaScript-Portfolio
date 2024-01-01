const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//  Adding the addEventListener for the next Button:
next.addEventListener('click', () => {
    // Incrementing the currentActive:
    currentActive++
    // If I am at the Last Button:
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

//Adding the addEventListener for the previous Button:
prev.addEventListener('click', () => {
    // Decrementing the currentActive:
    currentActive--
    // If I am at the First Button:
    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})

//  Creating the function called update here:
function update() {
// Using the forEach Method to loop through the circles:
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
// Adding the class of active:
            circle.classList.add('active')
        } else {
// Removing the class of active:
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    // This is styling the Progress Style Width:
    progress.style.width = (actives.length - 1) /
    // You must use % for the progress bar to show up.
     (circles.length - 1) * 100+'%';
    
    console.log(progress.style.width);
    
    // Using the if else Statement:
    // This is the State of the button
    if(currentActive === 1) {
    // If I am at button 1, the prev.disabled will be true
        prev.disabled = true
    } else if(currentActive === circles.length) {
    // If I am at button 4, the next.disabled will be true
        next.disabled = true
    } else {
    // If I am at the center, the prev and nex button disabled
    // will be false:
        prev.disabled = false
        next.disabled = false
    }
}
