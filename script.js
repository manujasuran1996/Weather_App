let weather = {
    apiKey: "482944e26d320a80bd5e4f23b3de7d1f",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description} = data.weather[0];
      const { temp, temp_min, temp_max, humidity } = data.main;

  
      //display search according to user input
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";

      //display next hour
      document.querySelector(".temp2").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = humidity + "%";
      document.querySelector(".icon2").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";

      //display next 5 days
      document.querySelector(".icon3").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description2").innerText = description;  
      document.querySelector(".tempmax").innerText = temp_max + "°C";
      document.querySelector(".tempmin").innerText = temp_min + "°C";

      
      
      document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });

  document.querySelector(".Rio").addEventListener("click", function () {
        weather.fetchWeather("rio de janeiro");
     });  
      
  document.querySelector(".Beijing").addEventListener("click", function () {
        weather.fetchWeather("beijing");
    });  

  document.querySelector(".LA").addEventListener("click", function () {
        weather.fetchWeather("los angeles");
    });  


  