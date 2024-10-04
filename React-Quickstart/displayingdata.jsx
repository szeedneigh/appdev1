{/* Displaying Data */}

// JSX let you put markup into JavaScript. Curly braces let you "escape back" into JavaScript so that you can embed some variable from you code and display  it to the user. For example, this will display user.name:

return (
  <h1>
    {user.name}
  </h1>
);

// You can also "escape int JavaScript" from JSX attributes, but you have to use curly braces instead of quotes. 
// For example, className='avatar' passes the 'avatar' string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:

return (
  <img 
    className="avatar"
    src={user.imageUrl}
  />
);

// You can put more complex expressions inside the JSX curly braces too, for example, striung concatenation:

const user = {
  name:'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  iamgeSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.iamgeSize,
          height: user.iamgeSize
        }}
      />
    </>
  );
}

// In the above example, style={{}} is not special syntax, but a regular {} object inside the style={} JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables.