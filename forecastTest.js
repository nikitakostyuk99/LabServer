const url = 'https://api.darksky.net/forecast/ec06c4a9684ad84579747535bc13b48f/37.8267,-122.4233';

const axios = require('axios');




const getWeatherUrl = (latPosition, lngPosition) => {
    //return 'https://api.darksky.net/forecast/ec06c4a9684ad84579747535bc13b48f/${latPosition},${lngPosition}';
    return 'https://api.darksky.net/forecast/ec06c4a9684ad84579747535bc13b48f/'+latPosition+','+lngPosition;
}

const convertToCelcium = (farengateTemperature) =>{
    return (farengateTemperature - 32) *(5/9);
}


const getWeather = (latPosition, lngPosition) =>{
    
    axios.get(getWeatherUrl(latPosition,lngPosition))
    .then(
        response =>{
            console.log('temperature = '+convertToCelcium(parseFloat(response.data.currently.temperature)));    
        } 
    );
}


module.exports.getWeather = getWeather;
