// This is getting the panels using the querySelectorAll():
const panels=document.querySelectorAll('.panel');

// Using the forEach Method to Loop through each Panel:
// When you actually clicked on the panel, it will add the 
// class of active and before doing so, it will invoke the 
// removeActiveClasses() here that will remove the active class
// in the existing panel:
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
//  Invoking the removeActiveClasses() to remove the class of
//  active on that Particular Panel:
        removeActiveClasses()  
        panel.classList.add('active')
    })
})



//  Creating the function to remove the active class:
// This function is used to remove the active class first:
function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

