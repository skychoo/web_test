const API_KEY = "d3655fb2154d4602e3e4f1c058280e6d";
//const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
function fn_onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat,lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=d3655fb2154d4602e3e4f1c058280e6d`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    
}

function fn_onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(fn_onGeoOk, fn_onGeoError);
