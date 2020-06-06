import { battery } from "power";
import document from "document";
import { getTheta } from "../common/utils"

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

    if(battery.chargeLevel > 80){
      colour = "green";
    }else if(battery.chargeLevel > 50){
      colour = "yellow";
    }else{
      colour = "red";
    }

    batteryCircle.sweepAngle = getTheta(battery.chargeLevel);
    batteryCircle.fillColor = "green";

  }
  
}