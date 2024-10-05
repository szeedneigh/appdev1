{/* Sharing data between components */}

// In the presvious example, each MyButton had its own independent count, and when each button was clicked, only the count for the button clicked changed:
// However, often you'll need components to share data and always update together.
// To make both MyButton components display the same count and update together, you need to move the state from the individual buttons "upwards" to the closest component containing all of them.

// Now when you click either button, the count in MyApp wil change, which will change both of the counts in MyButton. Here's how you can express this in code.
//  First, move the state up from MyButton into MyApp:

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

// Then, pas the state down from MyApp to each MyButton, together with the shared click handler. You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like <img>:
// The information you pass down like this is called props. Now the MyApp component contains the count state and the handleClick event handler, and passes the both of them down as props to each of the buttons.
// Finally, change MyButton to read the props you have passed from its parent component:

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      CLicked {count} times
    </button>
  );
}


// When you click the button, the onClick handler fires. Each button’s onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs. That code calls setCount(count + 1), incrementing the count state variable. The new count value is passed as a prop to each button, so they all show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.

import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
