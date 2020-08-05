window.addEventListener('load', () => {
 let long;
 let lat;


if (navigator.geolocation){
 navigator.geolocation.getCurrentPosition(position => {
     console.log(position);
     long = position.coords.longitude
     lat = position.coords.latitude

     let temperatureDescription = document.querySelector('.temperature-Description')
     const locationTimezone = document.querySelector('.location-timezone');
     let temperatureDegree = document.querySelector('.temperature-degree');
     let temperatureSection = document.querySelector('.temperature');
     let temperatureSpan = document.querySelector('.temperature span')
     let temperaturedes = document.querySelector('.temperature-des')

     const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8f2a67da30cf730e6ae655c64ba08488`;

     if (temperatureDescription = "scattered clouds"){
        document.getElementById('polo').className += 'wi wi-day-cloudy';
     } else if (temperatureDescription = "clear sky"){ 
        document.getElementById('polo').className += 'wi wi-day-sunny'
     }else if (temperatureDescription = "few clouds" ){
        document.getElementById('polo').className += 'wi wi-day-cloudy'
     }else if (temperatureDescription = "rain"){
        document.getElementById('polo').className += 'wi wi-day-rain'
     }

     fetch(api)
     .then(response => {
         return response.json();
     })
     .then(data => {
     console.log(data);
     const {temp} = data.main;
     const {description} = data.weather[0];
     temperatureDescription.textContent = description;
     temperatureDegree.textContent = temp;
     locationTimezone.textContent = data.name;
     temperaturedes.textContent = description;

     temperatureSection.addEventListener('click', () => {
        if(temperatureSpan.textContent === "F"){
           let celsius = (temp - 32) * (5 / 9);
       temperatureDegree.textContent = Math.floor(celsius);
           temperatureSpan.textContent = "C";
           }else {temperatureSpan.textContent ="F";
           temperatureDegree.textContent = temp;
       }

        let locationIcon = document.querySelector('.weather-icon');
        const {icon} = data.weather[0];
  

        });


     })
     
    });
}

});
