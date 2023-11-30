const foundCityCard = ()=>{

return`
<div class="card m-4 p-4">
    <div class="card-header"></div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-evenly align-items-center">
                <span class="day-name"></span>
                <img class="img-fluid" src="">
                <div class="temp-list">
                    <span class="day-temp"></span>
                    <span class="night-temp"></span>
                </div>
        </li>
    </ul>
</div>`;

}

export default foundCityCard;