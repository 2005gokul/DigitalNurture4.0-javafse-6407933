import React, { useState } from 'react';

// Login button component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout button component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Component shown to logged-in users
function UserGreeting() {
  return <h2>Welcome Back! You can now book flight tickets.</h2>;
}

// Component shown to guests
function GuestGreeting() {
  return <h2>Welcome Guest! Please Sign Up.</h2>;
}

// Conditional Greeting
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Flight Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;

