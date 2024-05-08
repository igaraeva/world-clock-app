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
  if (colomboElement) {
    let colomboDateElement = colomboElement.querySelector(".date");
    let colomboTimeElement = colomboElement.querySelector(".time");

    let colomboDate = moment().tz("Asia/Colombo").format("dddd, Do YYYY");
    let colomboTime = moment().tz("Asia/Colombo").format("H:mm:ss");

    colomboDateElement.innerHTML = colomboDate;
    colomboTimeElement.innerHTML = colomboTime;
  }

  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulDate = moment().tz("Asia/Seoul").format("dddd, Do YYYY");
    let seoulTime = moment().tz("Asia/Seoul").format("H:mm:ss");

    seoulDateElement.innerHTML = seoulDate;
    seoulTimeElement.innerHTML = seoulTime;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  citiesElement.innerHTML = `<li class="city">
          <div>
            <h2> ${cityName}</h2>
            <div class="date">${cityTime.format("dddd, Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm:ss")}</div>
        </li>`;
}
let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
