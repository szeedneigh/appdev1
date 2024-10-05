{/* Responding to events */}

// You can respond to events by declaring event handler functions inside your components:

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

// Notice how onClick={handleClick} has no parenthesis at the end! Do not call the event handler function: you only need to pass it down. React will call you event handler when the user clicks the button.
