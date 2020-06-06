import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { weatherInfo } from "../info/weatherInfo";

export function clockInfo(){

  // Update the clock every minute
  clock.granularity = "seconds";
  // Get a handle on the <text> element
  const clockData = document.getElementById("clock-data");
  const dateData = document.getElementById("date-data");
  const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
  

  // Update the <text> element every tick with the current time
  clock.ontick = (evt) => {
    let today = evt.date;
    let hours = today.getHours();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
    let ampm = "";
    if (preferences.clockDisplay === "12h") {
      // 12h format
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    } else {
      // 24h format
      hours = util.zeroPad(hours);
    }
    let mins = util.zeroPad(today.getMinutes());
    let seconds = util.zeroPad(today.getSeconds());
    clockData.text = `${hours}:${mins}:${seconds}${ampm}`;
    dateData.text = `${day}, ${month} ${today.getDate()}`;
  }
  
}