{/* Creating and Nesting Components */}

// React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

// React components are JavaScript functions that return markup:


function MyButton() {
  return (
    <button>I,m a button</button>
  );
}

// Now that you've declared MyButto, you can nest it into another component:

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

// Notice that <MyButton /> starts with a capital letter. That's how you know it's a React component. React component names must always start with a capital letter, while the HTML tags must be lowercase.

// Have a look at the result:

{/* App*/}

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}


// The export default keywordws specify the main component in the file. If you're not familiar with some piece of JavaScript syntax, MDN and javascript.info have great reference.
