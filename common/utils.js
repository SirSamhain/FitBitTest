// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function getTheta(n){
  return (n/100) * 360;
}

export function getColor( theta ){
  if(theta > (360 * .80)){
    return "#17fc03";
  }else if(theta > (360 * .50)){
    return "yellow";
  }else{
    return "red";
  }
}
