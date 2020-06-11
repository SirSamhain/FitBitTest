import { battery } from "power";
import document from "document";
import { getTheta, getColor } from "../common/utils"

export function batteryInfo(){

  const batteryData = document.getElementById("battery-data");
  const batteryCircle = document.getElementById("batteryIndicator");
  const colour = "green";

  battery.onchange = (evt) => {

    batteryData.text = battery.chargeLevel;
    if(battery.chargeLevel < 100){
      batteryData.x = 9;
    }else{
      batteryData.x = 5;
    }

    batteryCircle.sweepAngle = getTheta(battery.chargeLevel);
    batteryCircle.fillColor = getColor(getTheta(battery.chargeLevel));

  }
  
}