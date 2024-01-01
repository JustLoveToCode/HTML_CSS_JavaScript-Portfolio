const imageContainerEl=document.querySelector(".image-container");

const prevEl=document.getElementById("prev");

const nextEl=document.getElementById("next");

let x=0;
let timer;
// Add the addEventListener to the prevEl:
prevEl.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    updateGallery();
});

// Add the addEventListener to the nextEl:
nextEl.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallery();
});



// x = x + 45 or x - 45 is basically the Rotation along the Y Axis:
function updateGallery(){
// style.transform is the property that allowed you to apply the 2D or
// 3D transformation to the HTML element:
    imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;
// Every 7 seconds, the Gallery will rotate by itself:
    timer=setTimeout(()=>{
        x=x-45
        updateGallery()
    },7000)
}

updateGallery()



// setTimeout: This is used to delay the Execution of the Code.
// Allowed you to Schedule the Function or Code Snippet to be Executed
// after a Certain Amount of time has passed.

// clearTimeout basically Reset the Timer
// that it is actually functioning normally.
//So when you click on the next or previous button, the timer that is 
// initially set to 7000 will now be resetted by itself, when you click on the Prev or the Next Button.




