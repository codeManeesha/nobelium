import React, { useState } from "react";

function App() {
  const [pixelValue, setPixelValue] = useState("");
  const [remValue, setRemValue] = useState("");

  const convertPixelToRem = (pixelValue) => {
    const remValue = pixelValue / 16;
    return remValue.toFixed(2);
  };

  const handlePixelValueChange = (event) => {
    const value = event.target.value;
    setPixelValue(value);
    setRemValue(convertPixelToRem(value));
  };

  return (
    <div>
      <h2>Pixel to Rem Converter</h2>
      <div>
        <label htmlFor="pixel-value">Pixel Value: </label>
        <input
          type="number"
          id="pixel-value"
          value={pixelValue}
          onChange={handlePixelValueChange}
        />
      </div>
      <div>
        <label htmlFor="rem-value">Rem Value: </label>
        <input type="text" id="rem-value" value={remValue} readOnly />
      </div>
    </div>
  );
}

export default App;
