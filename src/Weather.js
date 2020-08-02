import React from "react";
import axios from "axios"

export default function (props){
    function setTemperature(response){
        let temperature= Math.round(response.data.main.temp)
        alert(`${temperature}`)
        }
      
    let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=b5b502e3f5d51eafa682fcf63b13086eef&units=metric`
   axios.get(apiUrl).then(setTemperature)
return<p>{setTemperature}C°</p>
}