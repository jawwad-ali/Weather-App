import React from 'react';
import './App.css';
import Forecast from './Component/Forecast';
import Weather from './Component/Weather';

function App() {
  return (
    <div>
      <Weather />
      <Forecast />
    </div>
  )
}

export default App;
