import document from "document";
import { me as appbit } from "companion";
import { geolocation } from "geolocation";

const key = "9fb533752c482e6a8678bd66d62943e2";
const time = 3600000;
const options = {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      "Content-Type": 'application/json; charset=utf-8',
      "Accept": "application/json"
    })
}

weatherInfo();

function weatherInfo(){
    if (!appbit.permissions.granted("access_internet") && !appbit.permissions.granted("access_location")) {
        console.log("We need access to interwebs and location to check weather :) ");
        return;
    }
    weather();
    setInterval( weather, time);
}

function weather(){

    geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        url = "https://jsonplaceholder.typicode.com/todos/1"
        url = "http://localhost:8080/test"

        fetch(url, options).then( (resp) => {
            console.log(resp);
            console.log(resp.headers)
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err.message);
        })
        console.log(url);

    })

}

