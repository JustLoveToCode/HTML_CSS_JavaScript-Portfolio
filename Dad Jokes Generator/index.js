
const btnEl=document.getElementById('btn');
const jokeEl=document.getElementById('joke');


const apiKey="0TILuaevk0L+tZOOyxWv4A==Osl6AGCiALw8pZu2";


const options={
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};


//  Using the API Key Here:
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){
// Using the try and catch keyword
try{
    // There is a Lagtime for the Next Joke to be
    // displayed, hence, we use the jokeEl.innerText
    // as 'Updating'.
    jokeEl.innerText='Updating...'
    // When the joke is still being fetched,
    // We want to disable the button, Hence
    // we set it to true, note that you cannot
    // capitalized the true to True
    btnEl.disabled=true;
    // The innerText of the button is changed
    // to Loading.
    btnEl.innerText="Loading";
    // Using the await keyword to fetch the data:
    const response=await fetch(apiURL,options);
    // Converting the response into the Json Format:
    const data=await response.json()
    // innerText will change the HTML Document Element
    jokeEl.innerText=data[0].joke;
    // After getting the Joke
    // The btn.El.disabled is changed to false
    // Note that you cannot capitalized the false to False
    btnEl.disabled=false;
    btnEl.innerText='Tell me the Next Joke'
} catch(error){
    // Catch the error by reflecting the jokeEl.innerText=
    // 'An Error happened, Try again later'
    jokeEl.innerText="An Error happened, Try again later";
    
}
    
}


btnEl.addEventListener('click', getJoke);