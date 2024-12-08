import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <Home /> : <Login setLoggedIn={setLoggedIn} />}
    </div>
  );
};

export default App;
