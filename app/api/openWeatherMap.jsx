import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5a33fb475ccc0f2d5eefeaa2de19a6c7&units=metric';

//5a33fb475ccc0f2d5eefeaa2de19a6c7

module.exports = {
    getTemp(location){
        var encodedLocation = encodeURIComponent(location)
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function(res){
            //if(res.data.cod && res.data.message){
            if(!res.status) {
                //throw new Error(res.data.message);
                throw new Error("City Not Found");
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            //throw new Error(res.data.message);
            throw new Error("City Not Found");
        })
    }
}