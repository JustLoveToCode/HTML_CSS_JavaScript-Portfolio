// Bring in the elements into JavaScript

// Using the let keyword to set initial count to 0
let count=0

const value=document.querySelector('#value');
const btns=document.querySelectorAll(".btn");

// Add EventListeners for each of the items
// that you are bring-ing in using the forEach Method

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
// e.currentTarget: This is the element
// that the Event Listener is attached to:
// it represent the Current Target element
// that will triggered the Event:
// Provide access to the List of CSS classes
// that the element has:
// This will target the CSS classes:
// add, remove, toggle and contains:
    const styles=e.currentTarget.classList
    if(styles.contains('decrease')){
    count--;
    }
    else if(styles.contains('reset')){
    count=0
    }
    else{
    count++;
    }
    if(count>0){
        value.style.color='green';
    }
    if(count<0){
        value.style.color='red';
    }
    if(count===0){
        value.style.color='white';
    }
    


    
    value.textContent=count
    })

});

// What is the event for the currentTarget:
// The currentTarget property return the elements
// whose event listener triggered the event.
// The currentTarget Property is read-only
// The currentTarget property is also useful
// during the capturing and bubbling.
// Get the element where the event occurred
// const element=event.target
// let text=event.target.tagName
// e.currentTarget.classList= It will return the 
// classes that you have clicked for that button.

// HTML DOM: whether it contain the classList
// let x=element.classList.contains('myStyle')
// Code Explanation
// Does the element has myStyle class token

// HTML DOM: To add the classList
// To add the class to the particular element
// const list=element.classList
// list.add('myStyle')

// HTML DOM: To remove the classList
// To remove the class to the particular element
//cosnst list=element.classList
// list.remove('myStyle')