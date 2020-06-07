import { display } from "display";
import { batteryInfo } from "../info/powerInfo";
import { heartInfo } from "../info/heartInfo";
import { clockInfo } from "../info/clockInfo";
import { gyroInfo } from "../info/gyroInfo";
import { accelerometerInfo } from "../info/accelerometerInfo";
import { barometerInfo } from "../info/barometerInfo";
import { bodyPresenceInfo } from "../info/bodyPresenceInfo";
import { orientationInfo } from "../info/orientationInfo";
import { stepsInfo, caloriesInfo, distanceInfo } from "../info/goalsInfo";
import { weatherInfo } from "../info/weatherInfo";

const sensors = [];

distanceInfo();
stepsInfo();
caloriesInfo();
batteryInfo();
heartInfo(sensors);
clockInfo();
weatherInfo();
// gyroInfo(sensors);
// accelerometerInfo(sensors);
// barometerInfo(sensors);
// bodyPresenceInfo(sensors);
// orientationInfo(sensors);

display.addEventListener("change", () => {
    // Automatically stop all sensors when the screen is off to conserve battery
    display.on ? sensors.map(sensor => sensor.start()) : sensors.map(sensor => sensor.stop());
});

console.log(sensors);