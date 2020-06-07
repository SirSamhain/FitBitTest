import { peerSocket } from "messaging";
import document from "document";

const weatherIcon = document.getElementById("weather-icon");
const weatherLocation = document.getElementById("weather-location");
const weatherTemp = document.getElementById("weather-temp");

export function weatherInfo() {
    weatherIcon.text = getIcon("02d");
    peerSocket.onmessage = (evt) => {
        let weatherMessage = evt.data;
        weatherIcon.text = getIcon(weatherMessage.icon);
        weatherLocation.text = weatherMessage.location;
        weatherTemp.text = `${weatherMessage.temp}°C`;
    }
}

function getIcon(ico) {
    switch (ico) {
        // clear sky
        case "01d":
            return "☀️";
        case "01n":
            return "🌕";
            // few clouds   
        case "02d":
            return "🌤️";
        case "02n":
            return "🌕";
            // scattered clouds
        case "03d":
            return "☁️";
        case "03n":
            return "☁️";
            // broken clouds    
        case "04d":
            return "☁️";
        case "04n":
            return "☁️";
            // shower rain    
        case "09d":
            return "🌧️";
        case "09n":
            return "🌧️";
            // rain
        case "010d":
            return "🌦️";
        case "010n":
            return "🌧️";
            // thunderstorm
        case "011d":
            return "⛈️";
        case "011n":
            return "⛈️";
            // snow
        case "013d":
            return "❄️";
        case "013n":
            return "❄️";
            // mist
        case "50d":
            return "🌫️";
        case "50n":
            return "🌫️";

        default:
            return "🌫️";
    }
}