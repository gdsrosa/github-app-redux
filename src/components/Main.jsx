import { useState } from 'react';

import UserSearch from './UserSearch';
import UserInfo from './UserInfo';
import Footer from './Footer';
import { UserContext } from '@/context/UserContext';

const Main = () => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div>
        <h1>Github User Finder</h1>
        <div className="main">
          <UserSearch />
          {username && <UserInfo />}
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Main;
