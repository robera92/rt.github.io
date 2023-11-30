const currentTimeZone = "Europe/Vilnius";

import renderAutoSugestPlaces from "./modules/renderAutoSugestPlaces";
import renderSmallCityCard from "./modules/renderSmallCityCards";
import renderFoundCityCard from "./modules/renderFoundCityCard"

renderSmallCityCard();
renderAutoSugestPlaces();
renderFoundCityCard();


// display current time
var timeDisplay = document.querySelector(".current-time");
function refreshTime() {
  let dateString = new Date().toLocaleString("lt-LT", {timeZone: currentTimeZone});
  timeDisplay.innerHTML = dateString;
}
setInterval(refreshTime, 1000);