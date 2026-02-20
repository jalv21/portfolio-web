const person = {
  name: 'João Alvaro Rodrigues',
  occupation: 'Software Engineer',
  profilePicture: ''
};

function App() {
  return (
    <>
      <Profile />
    </>
  );
}

export function Profile() {
  let formattedName = person.occupation.replaceAll(' ', '');
  return (
    <>
      <img
        src={person.profilePicture}
        alt="Developer's profile picture"
        className="profile-img"
      />
      <h1 className="text-3xl font-bold text-gray-500">{person.name}</h1>
      <p>{`<${formattedName} />`}</p>
    </>
  );
}

export function Menu() {

  return (
    <>
    
    </>
  );
}

export default App;