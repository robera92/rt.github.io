import smallCityCard from "./templates/smallCityCard";
import getCityForecast from "./ajax/ajaxServiceCity";
import conditionCode from "./convertConditionCode"

const citiesToLoad = ['vilnius', 'kaunas', 'klaipeda', 'marijampole'];

const renderSmallCityCard = (city_code)=>{

    const imgPath = "../public/img/animated/";

    // add ajax call to city
    getCityForecast(city_code).then(result => {
        
        let newCard = document.createElement('div');
        newCard.classList.add(city_code, 'flex-grow-1');
        newCard.innerHTML = smallCityCard();
        newCard.querySelector('.city').textContent = result.place.name;
        
        const dateNow = new Date();
        dateNow.setHours(dateNow.getHours() - 1);
        let closestForecastAvailable = {};

        for(const forecast of result.forecastTimestamps){
            let parsedDateTest = new Date(forecast.forecastTimeUtc);
            if(dateNow < parsedDateTest){
                closestForecastAvailable = forecast;
                break;
            }
        }
   
        if(closestForecastAvailable){
            let closestForecast = closestForecastAvailable;
            let parsedDate = new Date(closestForecast.forecastTimeUtc);
            let currentCondition = conditionCode(closestForecast.conditionCode);

            newCard.querySelector('.time').textContent = parsedDate.getHours()+":"+String(parsedDate.getMinutes()).padStart(2, "0");;
            newCard.querySelector('.temp').textContent = closestForecast.airTemperature;
            newCard.querySelector('.wind').textContent = closestForecast.windSpeed + 'm/s';
            newCard.querySelector('.status').textContent = currentCondition.display_name;

            newCard.querySelector('img').src = imgPath + currentCondition.img;

            document.querySelector('.cities-forecast').appendChild(newCard);

        }
        



     
    });

}



for (const city of citiesToLoad){
    renderSmallCityCard(city);
}


export default renderSmallCityCard