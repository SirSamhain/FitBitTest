import document from "document";
import { HeartRateSensor } from "heart-rate";

export function heartInfo(sensors){

  const hrmData = document.getElementById("hrm-data");

  if (HeartRateSensor) {
    const hrm = new HeartRateSensor({ frequency: 1 });
    hrm.addEventListener("reading", () => {
      hrmData.text = hrm.heartRate ?  "♥️"+hrm.heartRate : 0
    });
    sensors.push(hrm);
    hrm.start();
  } else {
    hrmData.style.display = "none";
  }
  
}