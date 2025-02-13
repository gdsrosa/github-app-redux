import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { UserContext } from '@/context/UserContext';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <>
        <CssBaseline />
        <Main />
        <Footer />
      </>
    </UserContext.Provider>
  );
};

export default App;
