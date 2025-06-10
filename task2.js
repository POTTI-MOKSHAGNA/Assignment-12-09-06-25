const temperature = document.getElementById('temperature')
const city = document.getElementById('city')
const time = document.getElementById('time')
const weath = document.getElementById('weath')
const input = document.getElementById('input')
const apiKey = 'b800d453b62b3572469d3b526255ed19'

findWeather = async () => {
     const inputValue = input.value.trim();
    if (!inputValue) {
        alert('Please enter a city name.');
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
    const response = await fetch(apiUrl,{method:'GET'})
    const data = await response.json()
    const {weather,main,name} = data
    const {temp} = main
    const {description} = weather[0]
    const samayam = new Date()
    const week = ['Sunday','Monday',"Tuesday",'Wednesday','Thursday','Friday','Saturday']
    temperature.textContent = temp
    city.textContent = name
    time.textContent = `${samayam.getHours()}:${samayam.getMinutes()} ${week[samayam.getDay()]}`
    weath.textContent = description
    input.value = ''
}