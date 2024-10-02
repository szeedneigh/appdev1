{/* Conditional Rendering */}

{/* if statement */}
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

{/* conditional ? operator */}

<div>
  {isLoggedIn ? (
    <AdminPanel/>
  ) : (
      <LoginForm />
  )}
</div>

{/* logical && syntax */}

<div>
  {isLoggedIn && <AdminPanel />}
</div>
