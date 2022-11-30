var apiKey = "9876abe1ec13a72a4e7d542293d7c7b0";
var inputValue = document.getElementById('cityinput');


var button = document.querySelector('.btn');
//var inputValue = document.querySelector('textValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.innerText + "&appid=" + apiKey;

/*button.addEventListener('click', function(){
    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data)) 
 
    

})
 */  
    button.addEventListener('click',function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=" + apiKey).then((response) =>{ 
         response.json().then((data) => {
            console.log(data);
         })
    });

      /*      .then((res) => {
                if (res.status !==200) {
                console.log('Problem!', res.status);
                }
                 res.json().then((data)=> {
             console.log(data);
              });
           })
    
    */

});
  
  

