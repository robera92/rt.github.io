import ajaxService from './ajaxService'

const searchCode = ()=>{

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const searchCity = document.querySelector('.city').value;
        const searchTerm = document.querySelector('.term').value;
        
        let searchResponse;

        ajaxService(searchCity, searchTerm).then( result => searchResponse=result)
        .then( ()=>{

            if(searchResponse.data.length > 0){
                let result = document.querySelector('.result');
                result.classList.remove('d-none');
                document.querySelector('.alert-warning').classList.add('d-none');
                result.value = searchResponse.data[0].post_code;
            }
            else{
                let alert = document.querySelector('.alert-warning');
                alert.classList.remove('d-none');
                alert.textContent = 'Not found';
            }

    
        } );



    });

}

export default searchCode