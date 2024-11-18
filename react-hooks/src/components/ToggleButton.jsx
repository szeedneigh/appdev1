import { useState } from "react";

  const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
      setIsOn(!isOn);
    };

  return (
    <div>
      <div>
      <h2>{isOn ? 'The button is ON' : 'The button is OFF'}</h2>
      <button onClick={toggle}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
    </div>
  )
}

export default ToggleButton;