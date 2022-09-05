const API_KEY = `9a6237ab529ac789430c5ef81cdef3df`;


const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data));
}
const displayTemparature = data =>{
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
}
loadTemperature('comilla')