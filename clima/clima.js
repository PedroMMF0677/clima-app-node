//crear el axios
const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d35f14a3252566940263ba08ae06ea02&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}