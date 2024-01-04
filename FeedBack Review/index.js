// Accessing all the rating class all at one go
const ratingEls=document.querySelectorAll(".rating")

// Set the Initial Value as Empty String, This is Global Variable
let selectedRating='';

// Grabbing the element of the 'btn' in HTML
const btnEl=document.getElementById('btn')

//Grabbing the element of the 'container' in HTML
const containerEl=document.getElementById('container')




// forEach will give us each of the elements
// The reason is because there are 3 Different Emoji
// To target each of the different Emoji, we need to use
// the forEach Method to target each and everyone of them
//Without the forEach, you will have to add 3 EventListner
// for each of the reviews.

// event will give us the mouse event when we clicked on
// that particular emoji. event.target will give us the particular
// target that we have clicked, it can be the image that we have
//clicked or it can be the text that we have clicked
//event.target tell us what we have clicked. It can be image,
// it can be text, it can be the div that we have clicked
// The target property will return the element where the event
// is being clicked or occurred.
// For event.currentTarget, it will return the div element
// that is being clicked
ratingEls.forEach((ratingEl)=>{
    // Add EventListener for each and every ratings
    ratingEl.addEventListener('click',(event)=>{
    // Calling the function removeActive() to remove the active class:
       removeActive()
    // The selectedRating that is initially empty string ''
    // will now have the 'string' attached to it depending on what you 
    // have clicked:
    selectedRating= event.target.innerText || event.target.parentNode.innerText 
    
    // Adding the classList of active when the rating is clicked
    event.target.parentNode.classList.add('active')
    })
})

// btnEl is the HTML element that is being clicked using the addEventListener:
btnEl.addEventListener('click', () => {
    // If selectedRating is not an empty string
    if (selectedRating !== '') {
        containerEl.innerHTML = `
            <strong>Thank you!</strong>
            <br><br>
            Feedback: ${selectedRating}
            <p>We will use your feedback and improve our service in the future</p>
        `;
    }
});

// Remove the class of active from the element using the function 
// removeActive, This is a Global Function
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active')
        
    })
}