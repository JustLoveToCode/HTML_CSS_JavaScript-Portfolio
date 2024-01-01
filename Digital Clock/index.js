const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");


function updateclock(){
    // Using the new Date() Method to get the Hour:
    let h=new Date().getHours()
    // Using the new Date() Method to get the Minutes:
    let m=new Date().getMinutes()
    // Using the new Date() Method to get the Seconds:
    let s=new Date().getSeconds()
    let ampm="AM"
    //  If the h is More than 12, convert it to 1-12
    // Not to the 24 Hours Format and Change it to PM:
    if (h>12){
        h=h-12
        ampm="PM"
    }
    //  Using the Conditional Ternary Operator:
    // If the h is 9, it will be changed to 09
    // If the m is 4, it will be changed to 04:
    // If the s is 3, it will be changed to 03
    h = h<10 ? "0" + h :h;
    m = m<10 ? "0" + m :m;
    s = s<10 ? "s" + s :s;

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
    updateclock()
    },1000)

}

updateclock();




//The HTML DOM Document Object
//Get the 4 different elements that you want to toggle using the document. function itself.

//getElementById() method will return an element with a specific value


//Understanding Javascript:
//The document object represent your webpage.
//If you want to access any element in the HTML page itself, you always start by accessing the 
//document object.

//The different way and method to get the element from HTML.

//Meaning of the code below:
//document.getElementById(id);
//Find an element by element id.
//document.getElementsbyTagName(name);
//Find an element by the tag name itself.
//document.getElementsByClassName(name);
//Find element by class name.

//JavaScript Functions:
//A JavaScript function is a block of code designed to perform a particular tasks.
//A Javascript function is executed when"something" invoke or call it.

