import getCityForecast from "./ajax/ajaxServiceCity";
import conditionCode from "./convertConditionCode"


const renderFoundCityCard = ()=>{

    document.querySelector('form.city-search').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let cityName = formData.get('search');
        
        getCityForecast(cityName).then( result => {
            console.log(result);
        });


      });
}



export default renderFoundCityCard