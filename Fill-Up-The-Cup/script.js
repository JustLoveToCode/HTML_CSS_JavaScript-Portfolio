// Getting the elements inside and able to convert it into a nodelist which 
// is also in the form of an Array, hence, you can use the Array method to access it.
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')



// Looping through each of the cup and adding the eventListener to each
// of the cup here invoking the highlightCups with the idx passed in:
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => 
    // Invoking the highlightCups here:
    highlightCups(idx))
})

// idx is what you are going to click
// If the idx===7 which mean all the glasses are already filled,
// you will want to toggle between the empty and the full state.
// When all the glasses are filled, and you clicked again,
// you will remove the idx:
function highlightCups(idx) {
    
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
// If the nextElementSibling do not  contain the class of 'full' and the
// current glasses that we clicked contain the class of 'full', decrement
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

// idx is what we will be CLICKING ON.
// Adding the classList if the idx2 which is the water to be filled
// is less than or equal to the cup.
// For example, if the idx is equal to 0 and the idx2 which is the 
// water to be filled is 0, the cup will be filled.
// On the other hand, if the idx2 is equal to 2 and idx is equal to 3.
// the classList of 'full' will be removed.
// I not only want to fill the one I have clicked on, but also fill the one before that

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    // Invoking the function here to allow the big cup to be updated
    // when you click on the small cup that create the classList of 'full'
    updateBigCup()
}

// Updating the BigCup() here using the function option

function updateBigCup() {
    // This is getting the smallcup that has the class of 'full'
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // This is the total number of cups which is equal to 8
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}

// This is invoking the function of the above function
updateBigCup()
