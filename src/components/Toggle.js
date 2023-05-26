import React from "react";

function Toggle({isOn, setIsOn}) {
  function handleState(){
    setIsOn(isOn=> !isOn)
  }

  const color = isOn? "red":"white"

  return <button style={{background: color}} onClick={handleState}>{isOn? "ON": "OFF"}</button>;
}

export default Toggle;
