var apiKey = "9876abe1ec13a72a4e7d542293d7c7b0";
var inputValue = document.querySelector('#cityinput');


var button = document.querySelector('.btn');
//var inputValue = document.querySelector('textValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=" + apiKey;

/*button.addEventListener('click', function(){
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data)) 
 
    

})
 */  
 $('.search').on("click", function (event){
    event.preventDefault();
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data))
 

});
  
  
    /*  city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
        if(city === "") {
        return;
    };
    inputValue.push(city);

    localStorage.setItem('city', JSON.stringify(inputValue));
    fiveForecastEl.empty();
    getHistory();
    getWeatherToday();
});
*/
