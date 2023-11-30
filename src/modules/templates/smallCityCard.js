const smallCityCard = ()=>{

    return`
    <div class="card flex-grow-1">
    <div class="card-header d-flex justify-content-between">
      <span class="city">-</span>
      <span class="time">-</span>
    </div>
    <div class="card-body d-flex flex-column align-items-center">
      <img src="img/animated/weather.svg" alt="" class="img-fluid">
      <span class="status">-</span>
    </div>
    <div class="card-footer d-flex justify-content-between">
        <span class="wind">-</span>
        <span class="temp">-</span>
      </div>
  </div>`;

}

export default smallCityCard;