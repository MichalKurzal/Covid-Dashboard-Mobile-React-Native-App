import React, {useState} from 'react';
import AppContext from './api/context';
import NavCointainer from './nav/NavContainer';

const App = () => {
    const [isDark, setIsDark] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    return (
        <AppContext.Provider value={{isDark, setIsDark, refreshing, setRefreshing}}>
            <NavCointainer />
        </AppContext.Provider>
    );
};

export default App;
