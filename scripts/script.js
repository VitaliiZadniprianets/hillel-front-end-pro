window.onload = function () {
  const weatherBlock = document.getElementById("weather");
  const updatedElements = [...document.querySelectorAll(".weather-value")];

  function showWeatherBlock() {
    weatherBlock.classList.remove("hidden");
  }

  function hideWeatherBlock() {
    weatherBlock.classList.add("hidden");
  }

  const textUpdater = (element, data) => {
    element.textContent = data;
  };

  
  const genWeatherIconLink = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  };
  
  const updaters = {
    temperature: textUpdater,
    pressure: textUpdater,
    humidity: textUpdater,
    wind: textUpdater,
    description: textUpdater,
    windDirection: textUpdater,
    icon: (element, data) => {
      element.src = genWeatherIconLink(data);
    },
  };

  function setWeatherData(city) {
    hideWeatherBlock();
    getWeatherDataByCity(city)
      .then(
        (data) => {
          console.log(data)
          updatedElements.forEach((element) => {
            const id = element.id;
            const newData = data[id];
            const updater = updaters[id];
            if (newData && updater && typeof updater === "function") {
              updater(element, newData);
            }
          });
        },
        () => {
          alert("Щось пішло не так. Спробуйте пізніше.");
        }
      )
      .finally(() => {
        showWeatherBlock();
      });
  }

  async function getWeatherDataByCity(city) {
    const API_KEY = "428ed9c20a980dc9c96118fc1ca2f88b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}&lang=uk`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const data = await response.json();
      const {
        main: { temp: temperature, pressure, humidity },
        wind: { speed: wind, deg: windDegree },
        weather: [{ description, icon }],
      } = data;

      return {
        temperature,
        pressure,
        humidity,
        wind,
        description,
        windDirection: getWindDirection(windDegree),
        icon,
      };
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

  function getWindDirection(windDegree) {
    const directions = [
      "Північний",
      "Північно-східний",
      "Східний",
      "Південно-східний",
      "Південний",
      "Південно-західний",
      "Західний",
      "Північно-західний",
    ];

    const index = Math.round(windDegree / 45) % 8;
    return directions[index];
  }

  const chooserCity = document.getElementById("chooserCity");
  const defaultCity = chooserCity.value;
  const onChangeCityHandler = function (event) {
    event.preventDefault();
    setWeatherData(this.value);
  };
  chooserCity.addEventListener("change", onChangeCityHandler);
  setWeatherData(defaultCity);
};