import React from 'react';
import './App.css';
import Forecast from './Component/Forecast';
import Weather from './Component/Weather';
import Footer from './Component/Footer';


function App() {
  return (
    <div>
      <Weather />
      <Forecast />
      <Footer />
    </div>
  )
}

export default App;
