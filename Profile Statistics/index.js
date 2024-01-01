const countersEl=document.querySelectorAll(".counter");
//take all the counter class element.


countersEl.forEach((countersEl) => { //for each counter
    countersEl.innerText = "0"; //counter set to "0" in the innerText initially.
    incrementCounter(); 
    function incrementCounter(){ //this function will increment the counter accordingly.
        let currentNum = +countersEl.innerText; //the + will add 1
        const dataCeil= countersEl.getAttribute
        ("data-ceil"); //get the attribute of the "data-ceil" and the respective max number accordingly.
        const increment = dataCeil/15 //We want to reach at the same time.
        //Hence, we divide by the smallest number, we need to define the increment.

        //we have already specify the increment to be the formula
        //as shown above.
        currentNum= Math.ceil(currentNum+increment)
       
        
        if(currentNum<dataCeil){
            countersEl.innerText=currentNum //forcing the number to go to its max
            //if the currentNum<dataCeil
            setTimeout(incrementCounter,50)
            //Set Timeout to increase the counter every 50 milliseconds, if you put
            //(incrementCounter, 10), the number will shoot up very fast since it 
            //is 10 milliseconds.
        } else {countersEl.innerText=dataCeil} //This will make sure that the counter goes to the maximum of dataCeil of 15, 260 and 27 accordingly.
    
    }
});


//the innerText property set or return the text content of the element itself.
//The forEach() method call the function for each element in the array
//for example, const fruits=["apple","orange","pear"];
//fruit.forEach(myFunction);
//The getAttribute() method of the Element interface return the value of the
//specified attribute on the element, if the give
//attribute do not exist, the value willl return as null.
//document.querySelectorAll: the Document method querySelectorAll() return
//the static( not All ) representing the list of the document elements
//that match the specific groups of selectors.\
//querySelector() method returns the first element that matched the CSS selector.
//To return all matches( not only the first), use the querySelectorAll() instead.
//Math.ceil: It will always round up the number to the largest number, this is when
//you do not want decimal.

//The setTimeout Function is a native Javascript Function, it set the timer(A countdown set in milliseconds) for an execution of the callback function, calling
//the function upon completion of the timer.

//if (currentNum<dataCeil){   //if currentNum is less than the dataCeil
//    setTimeout(incrementCounter,50) //increment the counter for every 50 //////millisecond.
//}


//Math.floor: It return the largest integer less than or equal to a given number.
//Math.ceil: In Javascript, it is used to round up the number that is
//passed to the nearest integer, what I mean by rounding up? I mean toward
// the  greater value, I mean toward the greater value. math.ceil() only take
//one parameter, the value to be rounded up, so if we have a value of 1.4, math.ceil will round it up to the next whole number.

//Round up basically mean make the number larger:
//let a=Math.ceil(0.60); it will round up to 1.00
//let b=Math.ceil(0.4); it will round up to 1.00
//let c=Math.ceil(5.0); it will round up to 5.00
//let d=Math.ceil(5.1); it will round up to 6.00
//let e=Math.ceil(-5.1); it will round up to -5.00
//let f=Math.ceil(-5.9); it will round up to -5.00
