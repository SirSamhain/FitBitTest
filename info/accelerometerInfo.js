import { Accelerometer } from "accelerometer";
import document from "document";

export function accelerometerInfo(sensors){

  const accelLabel = document.getElementById("accel-label");
  const accelData = document.getElementById("accel-data");

  if (Accelerometer) {
    const accel = new Accelerometer({ frequency: 1 });
    accel.addEventListener("reading", () => {
      accelData.text = JSON.stringify({
        x: accel.x ? accel.x.toFixed(1) : 0,
        y: accel.y ? accel.y.toFixed(1) : 0,
        z: accel.z ? accel.z.toFixed(1) : 0
      });
    });
    sensors.push(accel);
    accel.start();
  } else {
    accelLabel.style.display = "none";
    accelData.style.display = "none";
  }

}