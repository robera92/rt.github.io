
const getCityForecast = (city_name)=>{
    const url = "https://api.meteo.lt/v1/places/"+city_name+"/forecasts/long-term";
    return fetch(url).then( response => response.json() )
}

export default getCityForecast;