
import { Barometer } from "barometer";
import document from "document";

export function barometerInfo(sensors){

  const barLabel = document.getElementById("bar-label");
  const barData = document.getElementById("bar-data");
  
  if (Barometer) {
    const barometer = new Barometer({ frequency: 1 });
    barometer.addEventListener("reading", () => {
      barData.text = JSON.stringify({
        pressure: barometer.pressure ? parseInt(barometer.pressure) : 0
      });
    });
    sensors.push(barometer);
    barometer.start();
  } else {
    barLabel.style.display = "none";
    barData.style.display = "none";
  }
  
}