import { OrientationSensor } from "orientation";
import document from "document";

export function orientationInfo(sensors){

  const orientationLabel = document.getElementById("orientation-label");
  const orientationData = document.getElementById("orientation-data");
  
  if (OrientationSensor) {
    const orientation = new OrientationSensor({ frequency: 60 });
    orientation.addEventListener("reading", () => {
      orientationData.text = JSON.stringify({
        quaternion: orientation.quaternion ? orientation.quaternion.map(n => n.toFixed(1)) : null
      });
    });
    sensors.push(orientation);
    orientation.start();
  } else {
    orientationLabel.style.display = "none";
    orientationData.style.display = "none";
  }
  
}