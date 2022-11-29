var apiKey = "9876abe1ec13a72a4e7d542293d7c7b0";
var city = ["New York"]
var responseText = document.getElementById('citySearch')

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch(queryURL)
        .then(res => res.json())
        