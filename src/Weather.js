import React, {useState} from "react";
import axios from "axios";


export default function (props){
    let [temperature, setTemperature]= useState(null);
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=b502e3f5d51eafa682fcf63b13086eef&units=metric`
   axios.get(apiUrl).then(handleTemperature)
   function handleTemperature(response){
    setTemperature(Math.round(response.data.main.temp))
    }
    return(<p>The temperature in {props.city} is {temperature} C°</p>)
}