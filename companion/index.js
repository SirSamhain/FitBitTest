import { peerSocket } from "messaging";
import { me as appbit } from "companion";
import { geolocation } from "geolocation";
import { WeatherMessage } from "../common/WeatherMessage"

const key = "9fb533752c482e6a8678bd66d62943e2";
const time = 3600000;
const options = {};
let retries = 0;

weatherInfo();

function weatherInfo() {
    if (!appbit.permissions.granted("access_internet") && !appbit.permissions.granted("access_location")) {
        console.log("We need access to interwebs and location to check weather :) ");
        return;
    }
    weather();
    setInterval(weather, time);
}

function weather() {

    geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

        fetch(url).then((res) => res.json())
            .then(processData)
            .catch(processError)
        console.log(url);

    })

}

function processData(data) {
    let message = new WeatherMessage(data.name, data.main.temp, data.main.humidity, data.wind.speed, data.weather[0].description, data.weather[0].icon);
    if (peerSocket.readyState === peerSocket.OPEN) {
        peerSocket.send(message);
    }
}

function processError(error) {
    console.error(error.message);
    if(retries < 3){
        weather();
        retries++;
    }
    retries = 0;
}