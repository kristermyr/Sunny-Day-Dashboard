var apiKey = "9876abe1ec13a72a4e7d542293d7c7b0";
var inputValue = document.getElementById('cityinput');
var timeDisplayEl = $('#date1')

var button = document.querySelector('.btn');
//var inputValue = document.querySelector('textValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var mph = "mph";


// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.innerText + "&appid=" + apiKey;

/*button.addEventListener('click', function(){
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data)) 
 
    

})
 */  

function displayTime(){                                             
  var reformatDate = dayjs().format('dddd, MMMM D, YYYY');
  timeDisplayEl.text(reformatDate);
  }
  setInterval(displayTime, 
    
    1000);

    
var fiveDay = [];

for  (var i = 0; i < 5; i++) {
    let forecastDate = dayjs().add(i + 1,'days').format('MMMM D, YYYY'); 
    fiveDay.push(forecastDate);
}


console.log(fiveDay)
    function convertion(val){
        return (val - 273).toFixed(2)
    }


    button.addEventListener('click',function(){
        
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=" + apiKey)
        .then((response) =>{ 
         response.json().then((data) => {
            var lat = data.coord.lat
            var long = data.coord.lon
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`)
        .then(response=>response.json())
        .then(day5data=>{
            
            
//current day
            document.querySelector(".cardTodayCityName").innerHTML=day5data.city.name;
          //  document.querySelector('#fimg').innerHTML=
            document.querySelector("#temp").innerHTML=`<span>${ convertion(day5data.list[0].main.temp )} C</span>`;
            document.querySelector('#Humidity').innerHTML=`<span>${day5data.list[0].main.humidity} %<span>`;
            document.querySelector('#wind').innerHTML=`<span>${day5data.list[0].wind.speed} m/s<span>`;
            
            console.log(day5data)

            //Day1   
            document.querySelector("#date0").innerHTML=fiveDay[0];   
            document.querySelector("#temp0").innerHTML=`<span>${ convertion(day5data.list[1].main.temp )} C</span>`;
            document.querySelector('#Humidity0').innerHTML=`<span>${day5data.list[1].main.humidity} %<span>`;
            document.querySelector('#Wind0').innerHTML=`<span>${day5data.list[1].wind.speed} m/s<span>`;
            

            //Day2
            document.querySelector("#date01").innerHTML=fiveDay[1];
            document.querySelector("#temp1").innerHTML=`<span>${ convertion(day5data.list[2].main.temp )} C</span>`;
            document.querySelector('#Humidity1').innerHTML=`<span>${day5data.list[2].main.humidity} %<span>`;
            document.querySelector('#Wind1').innerHTML=`<span>${day5data.list[2].wind.speed} m/s<span>`;
            
            //Day3
            document.querySelector("#date2").innerHTML=fiveDay[3];
            document.querySelector("#temp2").innerHTML=`<span>${ convertion(day5data.list[3].main.temp )} C</span>`;
            document.querySelector('#Humidity2').innerHTML=`<span>${day5data.list[3].main.humidity} %<span>`;
            document.querySelector('#Wind2').innerHTML=`<span>${day5data.list[3].wind.speed} m/s<span>`;

            //Day4
            document.querySelector("#date3").innerHTML=fiveDay[3];
            

            //Day5
            document.querySelector("#date4").innerHTML=fiveDay[4];

          /*  for(var i = 0; i< day5data.list.length; i=(i+7)){
                var singleDay = day5data.list[i]
                console.log(singleDay.weather[0].description)
                console.log(singleDay)
                document.querySelector('.todayTemp').innerHTML=singleDay.main.temp;
                document.querySelector('.description').innerHTML=singleDay.weather[0].description;
                console.log(singleDay.wind.speed)
                document.querySelector('#wind0').innerHTML=singleDay.wind.speed;
            }*/

           // var day5WeatherDetails = ['Temp: ' + weatherData.current.temp + ' °C', 'Wind: ' + weatherData.current.wind_speed + ' km/h', 'Humidity: ' + weatherData.current.humidity + '%', 'UV Index: ' + weatherData.current.uvi]
            

           


    }
    )
        
         
               
         })
         
    });

      

});
  
  

