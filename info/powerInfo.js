import { battery } from "power";
import document from "document";
import { getTheta, getColor } from "../common/utils"

export function batteryInfo(){

  const batteryData = document.getElementById("battery-data");
  const batteryCircle = document.getElementById("batteryIndicator");
  setInfo();

  battery.onchange = (evt) => {
    setInfo();
  };

  function setInfo(){

    batteryData.text = battery.chargeLevel;
    if(battery.chargeLevel < 100){
      batteryData.x = 9;
    }else{
      batteryData.x = 5;
    }

    batteryCircle.sweepAngle = getTheta( battery.chargeLevel );
    batteryCircle.style.fill = getColor( getTheta(battery.chargeLevel) );

  }
  
}

