import React, {useState} from 'react';
import AppContext from './api/context';
import {MyTheme} from './theme/theme';
import {NavigationContainer, DarkTheme, DefaultTheme, useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListScreen} from './screens/listScreen';
import {HomeScreen} from './screens/homeScreen';
import Icon from 'react-native-vector-icons/Feather';
import {TopTab} from './componets/topTab';

const Tab = createBottomTabNavigator();

const App = () => {
    const [isDark, setIsDark] = useState(true);
    const {colors} = useTheme();

    return (
        <AppContext.Provider value={{isDark, setIsDark}}>
            <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
                <TopTab />
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({color, size}) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (route.name === 'List') {
                                iconName = 'list';
                            }
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: colors.notification,
                        tabBarInactiveTintColor: 'grey',
                        headerShown: false,
                    })}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="List" component={ListScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
};

export default App;
