const getPlaces = ()=>{
    const url = "https://api.meteo.lt/v1/places";
    return fetch(url).then( response => response.json() )
}

export default getPlaces;