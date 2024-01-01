// Getting the class attribute using querySelectorAll:
const counters = document.querySelectorAll('.counter');


// Using the forEach method to loop through the node.
counters.forEach(counter=>{
    // The initial state of the innerText set to '10'
    counter.innerText='10'

    // getAttribute to get the value of the attribute of that
    // particular element
    const updateCounter=()=>{
        // Convert string "7500", "5000","12000" into number using Number()
        // Getting the value of the 'data-target'
        // This is the Maximum value in data-target="number":
        const target= Number(counter.getAttribute('data-target'))
        // This is the text that will be displayed on the screen:
        const c = Number(counter.innerText)
        
        // How quickly you want to increment the number
        // If want to go slower, make it a bigger number at the denominator.
        // This will allow the all 3 numbers to be increment at the same rate
        // Rate of Increment:
        const increment= target/5000
        
        // math.ceil will Round Up to the nearest whole number
        // target here represent the Maximum number:
        // If the number is less than the Maximum target: Keep increasing the 
        // number:
        if(c < target){
        // This is the "moving increment" that will be shown on the screen:
            counter.innerText=`${Math.ceil(c+ increment)}`
        // Create a setTimeout function for the updateCounter.
        // Increment it slowly by increasing the second:
            setTimeout(updateCounter,10)
            
        } else{
        // Do not allow the number to be much higher 
        //than what is mentioned above.
            counter.innerText= target
        }
        
        
    }
    // Invoke the updateCounter() function
    updateCounter()
    
})