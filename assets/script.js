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
            
            document.querySelector(".cardTodayCityName").innerHTML=day5data.city.name;
            document.querySelector(".todayTemp").innerHTML=`Temperature: <span>${ convertion(day5data.list[0].main.temp )} C</span>`
            document.querySelector('#wind0').innerHTML=day5data.list[0].wind.speed;
            document.querySelector('#humid0').innerHTML=day5data.list[0].main.humidity;
            console.log(day5data)

          /*  for(var i = 0; i< day5data.list.length; i=(i+7)){
                var singleDay = day5data.list[i]
                console.log(singleDay.weather[0].description)
                console.log(singleDay)
                document.querySelector('.todayTemp').innerHTML=singleDay.main.temp;
                document.querySelector('.description').innerHTML=singleDay.weather[0].description;
                console.log(singleDay.wind.speed)
                document.querySelector('#wind0').innerHTML=singleDay.wind.speed;
            }*/
        })
            
         
           
         })
    });

      

});
  
  

