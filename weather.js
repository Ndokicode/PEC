// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityinput");
const card=document.querySelector(".card");
const apiKey ="02d1398dbcb80377e06c609f8574d7f6";

weatherForm.addEventListener("Submit",async event =>{

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getweatherData(city);
            displayweatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);

        }

    }

    else{
        displayError("Please enter a city");
    }

});

async function getweatherData(city) {

    const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API key}`;

    
    
}

function displayweatherInfo(data){

}

function getweatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display ="flex";
    card.appendChild(errorDisplay);

}