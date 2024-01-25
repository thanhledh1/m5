import React, { useState } from 'react';

const carList = ['BMW ', 'CMEC', 'Audi'];
const colorList = ['Red', 'Blue', 'Green'];

function Car() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0]
  });

  const handleCarChange = (event) => {
    setSelectedCar(previousState => {
      return {
        ...previousState,
        car: event.target.value
      };
    });
  };


  const handleColorChange = (event) => {
    setSelectedCar(previousState => {
      return {
        ...previousState,
        color: event.target.value
      };
    });
  };

  return (
    <div>
        <h1>Selected your car</h1>
      <select value={selectedCar.car} onChange={handleCarChange}>
        {carList.map((car, index) => (
            <option key={index} value={car}>{car}</option>
            ))}
      </select>
      <select value={selectedCar.color} onChange={handleColorChange}>
        {colorList.map((color, index) => (
            <option key={index} value={color}>{color}</option>
            ))}
      </select>
            <h1>You select a {selectedCar.car} and {selectedCar.color}</h1>
    </div>
  );
}

export default Car;