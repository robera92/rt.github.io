const ajaxService = (city, adress)=>{
    const url = "https://api.postit.lt/v2/?city=";
    const key = '351M6RvXGpFlGkc4jeTu';

    return fetch(`${url}${city}&address=${adress}&key=${key}`)
    .then( response=> response.json() )
}

export default ajaxService;