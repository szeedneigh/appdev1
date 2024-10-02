{/* Displaying Data */}

return (
  <h1>
    {user.name}
  </h1>
);

{/* */}

return (
  <img 
    className="avatar"
    src={user.imageUrl}
  />
);

{/* */}

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