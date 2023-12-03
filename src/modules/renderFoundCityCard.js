import getCityForecast from "./ajax/ajaxServiceCity";
import conditionCode from "./convertConditionCode"
import foundCityCard from "./templates/foundCityCard"

const renderFoundCityCard = ()=>{
    const imgPath = "../public/img/animated/";
    
    document.querySelector('form.city-search').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let cityName = formData.get('search');
        
        getCityForecast(cityName).then( result => {

            let weekForecast = [];
            let allforecastTimestamps = result.forecastTimestamps;

            if(allforecastTimestamps.length > 0){

                let currentSeachTab = document.querySelector('.list-group-flush');

                document.querySelector('.current-city').classList.remove('d-none');
                document.querySelector('.current-city .card-header').textContent = cityName;
                document.querySelector('.list-group-flush').innerHTML = '';

                document.querySelector('.cities-forecast').classList.add('d-none');


                const dateNow = new Date();

                for(const forecast of allforecastTimestamps){
                    let parsedDate = new Date(forecast.forecastTimeUtc);

                        if( parsedDate.getHours() == dateNow.getHours()){
                            let pushData = {
                                date: parsedDate,
                                time_of_day: 'day',
                                forecast: forecast
                            }
                            weekForecast.push(pushData); // push current weather info
                        }

                } // loop end


                for(const dayForecast of weekForecast){ // display weather

                    let singleForecast = document.createElement('li');
                    singleForecast.classList.add("list-group-item");
                    singleForecast.innerHTML = foundCityCard();
                
                    let convertCurrentCondition = conditionCode(dayForecast.forecast.conditionCode);

                    singleForecast.querySelector('.day-name').textContent = new Date(dayForecast.date).toLocaleString('lt-LT', {weekday:'long'}) + " "+ convertCurrentCondition.display_name;
                    singleForecast.querySelector('img').src= imgPath + convertCurrentCondition.img;
                    singleForecast.querySelector('.day-temp').textContent = dayForecast.forecast.airTemperature;
                    
                    currentSeachTab.appendChild(singleForecast);

                }

            }


        });


      });
}


function displayForecast(forecast){



    if(forecast.day == 'today'){

    }

}


export default renderFoundCityCard