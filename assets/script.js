var apiKey = "9876abe1ec13a72a4e7d542293d7c7b0";
var inputValue = document.getElementById('cityinput');
var timeDisplayEl = $('#date1')
var button = document.querySelector('.btn');




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


console.log(fiveDay);

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
            
            var createIcon = document.createElement("img")
            
            document.querySelector(".cardTodayCityName").innerHTML=day5data.city.name;
          
            document.querySelector("#temp").innerHTML=`<span>${ convertion(day5data.list[0].main.temp )} C</span>`;
            document.querySelector('#Humidity').innerHTML=`<span>${day5data.list[0].main.humidity} %<span>`;
            document.querySelector('#wind').innerHTML=`<span>${day5data.list[0].wind.speed} m/s<span>`;
            
            console.log(day5data)

            //Day1   
            document.querySelector("#date01").innerHTML=fiveDay[0];   
            document.querySelector("#temp0").innerHTML=`<span>${ convertion(day5data.list[6].main.temp )} C</span>`;
            document.querySelector('#Humidity0').innerHTML=`<span>${day5data.list[6].main.humidity} %<span>`;
            document.querySelector('#Wind0').innerHTML=`<span>${day5data.list[6].wind.speed} m/s<span>`;
         

            //Day2
            document.querySelector("#date2").innerHTML=fiveDay[1];
            document.querySelector("#temp1").innerHTML=`<span>${ convertion(day5data.list[14].main.temp )} C</span>`;
            document.querySelector('#Humidity1').innerHTML=`<span>${day5data.list[14].main.humidity} %<span>`;
            document.querySelector('#Wind1').innerHTML=`<span>${day5data.list[14].wind.speed} m/s<span>`;
            
            //Day3
            document.querySelector("#date3").innerHTML=fiveDay[2];
            document.querySelector("#temp2").innerHTML=`<span>${ convertion(day5data.list[22].main.temp )} C</span>`;
            document.querySelector('#Humidity2').innerHTML=`<span>${day5data.list[22].main.humidity} %<span>`;
            document.querySelector('#Wind2').innerHTML=`<span>${day5data.list[22].wind.speed} m/s<span>`;

            //Day4
            document.querySelector("#date4").innerHTML=fiveDay[3];
            document.querySelector("#temp3").innerHTML=`<span>${ convertion(day5data.list[30].main.temp )} C</span>`;
            document.querySelector('#Humidity3').innerHTML=`<span>${day5data.list[30].main.humidity} %<span>`;
            document.querySelector('#Wind3').innerHTML=`<span>${day5data.list[30].wind.speed} m/s<span>`;

            //Day5
            document.querySelector("#date5").innerHTML=fiveDay[4];
            document.querySelector("#temp4").innerHTML=`<span>${ convertion(day5data.list[38].main.temp )} C</span>`;
            document.querySelector('#Humidity4').innerHTML=`<span>${day5data.list[38].main.humidity} %<span>`;
            document.querySelector('#Wind4').innerHTML=`<span>${day5data.list[38].wind.speed} m/s<span>`;
           
            var weatherURL = "http://openweathermap.org/img/wn/";
            
            var icon = [weatherURL + day5data.list[0].weather[0].icon + ".png"];
            var icon1 = [weatherURL + day5data.list[6].weather[0].icon + ".png"];
            var icon2 = [weatherURL + day5data.list[14].weather[0].icon + ".png"];
            var icon3 = [weatherURL + day5data.list[22].weather[0].icon + ".png"];
            var icon4 = [weatherURL + day5data.list[30].weather[0].icon + ".png"];
            var icon5 = [weatherURL + day5data.list[38].weather[0].icon + ".png"];

            document.querySelector('#img0').innerHTML= createIcon.setAttribute("src",icon1); 
           console.log(icon1)

                });               
                    });        
                });
            });
        
            
            
            