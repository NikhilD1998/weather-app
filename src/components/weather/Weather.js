const Weather = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var apiKey = "72fa26a26e718e29a8d690026ff2dd93";
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    var weatherData = fetch(url).then(res => res.json()).then(result => {
    var coord = result.weather[0].description
    console.log(coord);
    })
  });
  return(
    <div>
      <h1></h1>
    </div>
  )
}

export default Weather
