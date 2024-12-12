const apiKey="177e8fb4089d5b02d4a29d0f8a9b2934";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const image=document.querySelector(".weather-icon");
//const error=document.querySelector(".error");

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`)
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"

    }
    else{

        var data=await response.json();

        console.log(data)
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";

        if(data.weather[0].main=="Clouds"){
            image.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            image.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            image.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            image.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            image.src="images/mist.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

