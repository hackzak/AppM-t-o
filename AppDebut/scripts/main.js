
const CLEFAPI = '6bafa7f8ee710026d36930664630bd19';
let resultaAPI;

const temps = document.querySelector('.temps')
const temperature = document.querySelector('.temperature')
const localisation = document.querySelector('.localisation')

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        console.log(position);
        let long = position .coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long, lat);

    }, () => {
        alert(`Vous avez refusé la geolocalisation, l'applicatino ne peux pas 
        fonctionner, veuillez l'activer.!`)
    })
}

function AppelAPI(long, lat) {

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutelyunits=metric&lang=fr&appid=${CLEFAPI}`)
    .then((reponse) => {
        return reponse.json();
    })
    
    .then((data) => {
        console.log(data);

        resultaAPI = data;

        temps.innerText = resultaAPI.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultaAPI.current.temp)}°`
        localisation.innerText = resultaAPI.timezone;

    })

    

}