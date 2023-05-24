import React from 'react';
import ProfilePhoto from './components/profile/Profilephoto';
import FullName from './components/profile/Fullname';
import Address from './components/profile/Address';

const App = () => {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
};

export default App;
