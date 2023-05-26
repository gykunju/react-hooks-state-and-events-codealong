import React, { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [isOn, setIsOn] = useState(false)
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle isOn={isOn} setIsOn={setIsOn}/>
    </div>
  );
}

export default App;
