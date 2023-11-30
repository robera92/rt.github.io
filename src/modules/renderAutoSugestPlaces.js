import getPlaces from "./ajax/ajaxServicePlaces";

const renderAutoSugestPlaces = ()=>{

    getPlaces().then( (response) => {
   
        for (const property in response) {
            let newOption = document.createElement('option');
            newOption.setAttribute('data-name', response[property].code);
            newOption.textContent = response[property].name; 
            document.querySelector('#list-cities').appendChild(newOption);
          }

    } )
}



export default renderAutoSugestPlaces