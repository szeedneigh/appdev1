{/* Conditional Rendering */}

// In React, there is no special syntax for writing conditions. Instead, you'll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX; 

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

// If you prefer more compact code, you can use the conditional ? operator/ Unlike if, it works inside JSX:

<div>
  {isLoggedIn ? (
    <AdminPanel/>
  ) : (
      <LoginForm />
  )}
</div>

{/* When you don't need the alse branch, you can also use a shorter logical ?? syntax */}

<div>
  {isLoggedIn && <AdminPanel />}
</div>

// All these approches also work for conditionally specifying attributes. If you're unfamiliar with some of this JavaScript syntax, you can start by always using if...else