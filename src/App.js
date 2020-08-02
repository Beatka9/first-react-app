import React from 'react';
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
        <h1>Weather App</h1>
      <Weather city ="Arezzo"/>
      <a href="https://github.com/Beatka9/first-react-app">Code on github</a>
    </div>
  );
}

export default App;
