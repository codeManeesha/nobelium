import React, { useState } from "react";

function Change() {
  const [name, setName] = useState("Amit");
  const [isAmit, setIsAmit] = useState(true);

  const handleClick = () => {
    setIsAmit(!isAmit);
    setName(isAmit ? "Rajan" : "Amit");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default Change;
