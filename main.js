//do not show api key on your js
const API_KEY = 'c7632f375af5fe99a6e121ef17a651f1';

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`; 
    fetch(url)
    .then(res => res.json())
    .then(data =>displayTemperature(data));
}

const displayTemperature =(data)=>{
    console.log(data);
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
}

loadTemperature('Dhaka');