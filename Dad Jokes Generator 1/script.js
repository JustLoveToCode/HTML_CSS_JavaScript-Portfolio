// Get the element in the HTML document so that
// there is a way to manipulate them in JavaScript
const jokeEl= document.getElementById('joke');
const jokeBtn=document.getElementById('jokeBtn')



async function generateJoke(){
    const config={
        headers:{
        // The key value pair:
        // the default is the text/html: HTML response or application/json: JSON response or 
        // text/plain: Plain text response.
        // What kind of the data format you want to return here.
            'Accept': 'application/json'
        },
    }
    
    
    // Reason why you do this is because you only
    // want to get back a specific data, not the entire HTML
    // Await keyword is used when you are fetching the data from somewhere
    const res=await fetch('https://icanhazdadjoke.com', config)
    // Converting it into the json format
    const data= await res.json()
    jokeEl.innerHTML=data.joke
    // Set the innerHTML to jokeEl.innerHTML to be equal
    // to the data.joke which is the key inside the object
    // Object :{id:"", joke:"", status: 200}
        jokeEl.innerHTML= data.joke
    }
    
    





// Invoking the Function generateJoke()
generateJoke()

// Adding the addEventListener which is the click event
// for the function generateJoke
jokeBtn.addEventListener('click', generateJoke)