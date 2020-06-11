import { display } from "display";
import { batteryInfo } from "../info/powerInfo";
import { heartInfo } from "../info/heartInfo";
import { clockInfo } from "../info/clockInfo";
import { stepsInfo, caloriesInfo, distanceInfo } from "../info/goalsInfo";
import { weatherInfo } from "../info/weatherInfo";

const sensors = [];

batteryInfo();
heartInfo(sensors);
clockInfo();
weatherInfo();
distanceInfo();
stepsInfo();
caloriesInfo();

display.addEventListener("change", () => {
    // Automatically stop all sensors when the screen is off to conserve battery
    display.on ? sensors.map(sensor => sensor.start()) : sensors.map(sensor => sensor.stop());
    if (display.on){
        distanceInfo();
        stepsInfo();
        caloriesInfo();
    }
});

console.log(sensors);