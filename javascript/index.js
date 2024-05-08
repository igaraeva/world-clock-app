function updateTime() {
  let currentLocationDateElement = document.querySelector(
    "#current-location-date"
  );
  let currentLocationTimeElement = document.querySelector(
    "#current-location-time"
  );
  let currentLocation = moment.tz.guess();

  let currentLocationTime = moment().tz(`${currentLocation}`).format("H:mm:ss");
  let currentLocationDate = moment()
    .tz(`${currentLocation}`)
    .format("dddd, Do YYYY");

  currentLocationTimeElement.innerHTML = currentLocationTime;
  currentLocationDateElement.innerHTML = currentLocationDate;

  let colomboElement = document.querySelector("#colombo");
  let colomboDateElement = colomboElement.querySelector(".date");
  let colomboTimeElement = colomboElement.querySelector(".time");

  let colomboDate = moment().tz("Asia/Colombo").format("dddd, Do YYYY");
  let colomboTime = moment().tz("Asia/Colombo").format("H:mm:ss");

  colomboDateElement.innerHTML = colomboDate;
  colomboTimeElement.innerHTML = colomboTime;

  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");

  let seoulDate = moment().tz("Asia/Seoul").format("dddd, Do YYYY");
  let seoulTime = moment().tz("Asia/Seoul").format("H:mm:ss");

  seoulDateElement.innerHTML = seoulDate;
  seoulTimeElement.innerHTML = seoulTime;
}

updateTime();
setInterval(updateTime, 1000);
