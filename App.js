import React, {useState} from 'react';
import AppContext from './api/context';
import NavCointainer from './nav/NavContainer';


const App = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <AppContext.Provider value={{isDark, setIsDark}}>
           <NavCointainer/>
        </AppContext.Provider>
    );
};

export default App;
