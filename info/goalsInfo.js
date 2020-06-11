
import document from "document";
import { goals, today } from "user-activity";
import { getColor } from "../common/utils"

export function stepsInfo(){

  const stepsIndicator = document.getElementById("stepsIndicator");
  const stepsData = document.getElementById("steps-data");
  const theta = 360;
  const steps = today.local.steps;
  const stepsGoal = goals.steps;
  theta = steps > stepsGoal ? 360 : (steps/stepsGoal) * 360;

  stepsData.text = steps;
  stepsIndicator.sweepAngle = theta;
  stepsIndicator.style.fill = getColor(theta);

}

export function caloriesInfo(){

  const caloriesIndicator = document.getElementById("caloriesIndicator");
  const caloriesData = document.getElementById("calories-data");
  const theta = 360;
  const calories = today.local.calories;
  const caloriesGoal = goals.calories;
  theta = calories > caloriesGoal ? 360 : (calories/caloriesGoal) * 360;
  
  caloriesData.text = calories;
  caloriesIndicator.sweepAngle = theta;
  caloriesIndicator.style.fill = getColor(theta);

}

export function distanceInfo(){

  const distanceIndicator = document.getElementById("distanceIndicator");
  const distanceData = document.getElementById("distance-data");
  const theta = 360;
  const miles = (0.000621371) * today.local.distance;
  const milesGoal = (0.000621371) * goals.distance;

  theta = miles > milesGoal ? 360 : (miles/milesGoal)*360;
  distanceData.text = (Math.round(miles * 100) / 100) + "mi";
  distanceIndicator.sweepAngle = theta;
  distanceIndicator.style.fill = getColor(theta);

}

