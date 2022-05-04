import { useEffect, useState } from "react";

const Weather = () => {
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var apiKey = "72fa26a26e718e29a8d690026ff2dd93";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      fetch(url).then((res) => res.json()).then((result) => {
          setDescription(result.weather[0].description);
          setTemperature(result.main.temp)
        });
    });
  });

  
  return (
    <div>
      <h1>{description}</h1>
      <h1>{temperature}</h1>
    </div>
  );
};

export default Weather;
