import form from "./form";

const renderFrom = ()=>{
    let formElement = document.createElement('form');
    formElement.classList.add('form-line');
    formElement.innerHTML = form();
    document.querySelector('.card-body').appendChild(formElement);
}

export default renderFrom