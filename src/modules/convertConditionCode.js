const conditionCode = (code)=>{

    let img_name = 'weather.svg';
    let display_name = 'oro sąlygos nenustatytos';

    switch (code) {
        case 'clear':    // clear - giedra;
            img_name = 'clear-day.svg';
            display_name = 'giedra';
        break;
        case 'partly-cloudy':   // partly-cloudy - mažai debesuota;
            img_name = 'cloudy.svg';
            display_name = 'mažai debesuota';
        break;
        case 'variable-cloudiness': // variable-cloudiness - nepastoviai debesuota;
            img_name = 'cloudy.svg';
            display_name = 'nepastoviai debesuota';
        break;
        case 'cloudy-with-sunny-intervals':    // cloudy-with-sunny-intervals - debesuota su pragiedruliais;
            img_name = 'cloudy-1-day.svg';
            display_name = 'debesuota su pragiedruliais';
        break;
        case 'cloudy':// cloudy - debesuota;
            img_name = 'cloudy.svg';
            display_name = 'debesuota';
        break;
        case 'thunder':    // thunder - perkūnija;
            img_name = 'thunder.svg';
            display_name = 'perkūnija';
        break;
        case 'isolated-thunderstorms':    // isolated-thunderstorms - trumpas lietus su perkūnija;
            img_name = 'thunderstorms.svg';
            display_name = 'trumpas lietus su perkūnija';
        break;
        case 'thunderstorms':    // thunderstorms - lietus su perkūnija;
            img_name = 'thunderstorms.svg';
            display_name = 'lietus su perkūnija';
        break;
        case 'light-rain':    // light-rain - nedidelis lietus;
            img_name = 'rainy-1-day.svg';
            display_name = 'nedidelis lietus';
        break;
        case 'rain':    // rain - lietus;
            img_name = 'rainy-2-day.svg';
            display_name = 'lietus';
        break;
        case 'heavy-rain':    // heavy-rain - smarkus lietus;
            img_name = 'rainy-3-day.svg';
            display_name = 'smarkus lietus';
        break;
        case 'rain-showers':    // rain-showers - trumpas lietus;
            img_name = 'rainy-6.svg';
            display_name = 'trumpas lietus';
        break;
        case 'light-rain-at-times':    // light-rain-at-times - protarpiais nedidelis lietus;
            img_name = 'rainy-4.svg';
            display_name = 'protarpiais nedidelis lietus';
        break;
        case 'rain-at-times':    // rain-at-times - protarpiais lietus;
            img_name = 'rainy-5.svg';
            display_name = 'protarpiais lietus';
        break;
        case 'light-sleet':    // light-sleet - nedidelė šlapdriba;
            img_name = 'rain-and-sleet-mix.svg';
            display_name = 'nedidelė šlapdriba';
        break;
        case 'sleet':    // sleet - šlapdriba;
            img_name = 'snow-and-sleet-mix.svg';
            display_name = 'šlapdriba';
        break;
        case 'sleet-at-times':    // sleet-at-times - protarpiais šlapdriba;
            img_name = 'snow-and-sleet-mix.svg';
            display_name = 'protarpiais šlapdriba';
        break;
        case 'sleet-showers':    // sleet-showers - trumpa šlapdriba;
            img_name = 'snow-and-sleet-mix.svg';
            display_name = 'trumpa šlapdriba';
        break;
        case 'freezing-rain':    // freezing-rain - lijundra;
            img_name = 'rain-and-sleet-mix.svg';
            display_name = 'lijundra';
        break;
        case 'hail':    // hail - kruša;
            img_name = 'hail.svg';
            display_name = 'kruša';
        break;
        case 'light-snow':    // light-snow - nedidelis sniegas;
            img_name = 'snowy-1-day.svg';
            display_name = 'nedidelis sniegas';
        break;
        case 'snow':    // snow - sniegas;
            img_name = 'snowy-2-day.svg';
            display_name = 'sniegas';
        break;
        case 'heavy-snow':    // heavy-snow - smarkus sniegas;
            img_name = 'snowy-3-day.svg';
            display_name = 'smarkus sniegas';
        break;
        case 'snow-showers':    // snow-showers - trumpas sniegas;
            img_name = 'snowy-6.svg';
            display_name = 'trumpas sniegas';
        break;
        case 'snow-at-times':    // snow-at-times - protarpiais sniegas;
            img_name = 'snowy-6.svg';
            display_name = 'protarpiais sniegas';
        break;
        case 'light-snow-at-times':    // light-snow-at-times - protarpiais nedidelis sniegas;
            img_name = 'snowy-6.svg';
            display_name = 'protarpiais nedidelis sniegas';
        break;
        case 'snowstorm':    // snowstorm - pūga;
            img_name = 'snowy-3-day.svg';
            display_name = 'pūga';
        break;
        case 'mist':    // mist - rūkana;
            img_name = 'haze-day.svg';
            display_name = 'rūkana';
        break;
        case 'fog':    // fog - rūkas;
            img_name = 'fog-day.svg';
            display_name = 'rūkas';
        break;
        case 'squall':    // squall - škvalas;
            img_name = 'tornado.svg';
            display_name = 'škvalas';
        break;
    default:     // null - oro sąlygos nenustatytos.
        img_name = 'weather.svg';
        display_name = 'oro sąlygos nenustatytos';
    }

    const hours = new Date().getHours();
    if(hours < 6 || hours >= 18){
        img_name = img_name.replace("-day", '-night');
    }

    return {
        img: img_name,
        display_name: display_name
    };

}

export default conditionCode;