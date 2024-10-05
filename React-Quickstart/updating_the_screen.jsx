{/* Updating the screen */}

//  Often, you'll want your component to "remember" some information and display it. For example, maybe you want to count the number of times a button of clicked. To do this, add state to your component.

// First, import useState from React:

import { useState } from "react";

// Now you can declare a state variable inside you component:

function MyButton() {
  const [count, setCount] = useState(0);

// You'll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].
// The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() add pass the new value to it. Clicking this button will increment the counter:

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// React will call your component function again. This time,count will be 1. Then it will be 2. And so on.
// If you render the same component multiple times, each will get its own state. Click each button separately: 

import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button> 
  );
}

// Notice how each button "remembers" its own count state and doesn't affect other buttons.
