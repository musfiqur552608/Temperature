const API_KEY = `9a6237ab529ac789430c5ef81cdef3df`;


const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data));
}
const displayTemparature = data =>{
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('Dhaka')