import document from "document";
import { me as appbit } from "appbit";
import { geolocation } from "geolocation";

const key = "9fb533752c482e6a8678bd66d62943e2";

export function weatherInfo(){
    const time = 3600000;
    weather();
    if (!appbit.permissions.granted("access_internet") && !appbit.permissions.granted("access_location")) {
        console.log("We need access to interwebs and location to check weather :) ");
        return;
    }
    setInterval( weather, time);
}

function weather(){

    geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        fetch(url, {method: "GET"}).then( (resp) => {
            console.log(resp);
        })
        console.log(url);
    })

}