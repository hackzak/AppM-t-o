
const CLEAPI = '6bafa7f8ee710026d36930664630bd19';
let resultaAPI;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        console.log(position);

    }, () => {
        alert(`Vous avez refusé la geolocalisation, l'applicatino ne peux pas 
        fondtionner, veuillez l'activer.!`)
    })
}