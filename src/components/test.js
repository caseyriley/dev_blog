function militaryToMinutes(string) {
  let h = Number(string.match(/[^:]+/)); //match first 1 or 2 numbers
  let m = Number(string.match(/(?<=:)../)); //match last 2 numbers
  return h * 60 + m;
}

function minutesToMilitary(num) {
  let h = Math.floor(num / 60);
  let m = num % 60;
  if (m < 10) {
    //if a zero is needed for military time
    let f = "0";
    m = f + `${m}`;
  }
  return `${h}:${m}`;
}

militaryToMinutes("10:00"); //600

minutesToMilitary(600); //'10:00'
