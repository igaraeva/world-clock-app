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
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonDate = moment().tz("Europe/London").format("dddd, Do YYYY");
    let londonTime = moment().tz("Europe/London").format("H:mm:ss");

    londonDateElement.innerHTML = londonDate;
    londonTimeElement.innerHTML = londonTime;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let citiesElement = document.querySelector("#cities");
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  if (cityTimeZone.length > 0) {
    citiesElement.innerHTML = `<li class="city">
          <div>
            <h2> ${cityName}</h2>
            <div class="date">${cityTime.format("dddd, Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm")}</div>
        </li>
        <a  href = " / ">All cities</a>`;
  } else {
    citiesElement.innerHTML = `<a href=" / ">All cities</a>`;
  }
}
let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
