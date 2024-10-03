{/* Writing Markup With JSX*/}

// The markup syntax you've seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommended for local development support JSX out of the box.

// JSX is stricter that HTML. You have to close tags like <br />. Your component also can't return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

function AboutPage() {
  return (
    <>
    <h1>About</h1>
    <p>Hello there. <br />How do you do?</p>
    </>
  );
}

// If you have a lot of HTML to port to JSX, you can use an online converter.