
import { Gyroscope } from "gyroscope";
import document from "document";

export function gyroInfo(sensors){
  
  const gyroLabel = document.getElementById("gyro-label");
  const gyroData = document.getElementById("gyro-data");

  if (Gyroscope) {
    const gyro = new Gyroscope({ frequency: 1 });
    gyro.addEventListener("reading", () => {
      gyroData.text = JSON.stringify({
        x: gyro.x ? gyro.x.toFixed(1) : 0,
        y: gyro.y ? gyro.y.toFixed(1) : 0,
        z: gyro.z ? gyro.z.toFixed(1) : 0,
      });
    });
    sensors.push(gyro);
    gyro.start();
  } else {
    gyroLabel.style.display = "none";
    gyroData.style.display = "none";
  }
  
}