
import { BodyPresenceSensor } from "body-presence";
import document from "document";

export function bodyPresenceInfo(sensors){
  
  const bpsLabel = document.getElementById("bps-label");
  const bpsData = document.getElementById("bps-data");
  
  if (BodyPresenceSensor) {
    const bps = new BodyPresenceSensor();
    bps.addEventListener("reading", () => {
      bpsData.text = JSON.stringify({
        presence: bps.present
      })
    });
    sensors.push(bps);
    bps.start();
  } else {
    bpsLabel.style.display = "none";
    bpsData.style.display = "none";
  }
  
}