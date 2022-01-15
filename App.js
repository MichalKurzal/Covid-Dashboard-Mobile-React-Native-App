import React from 'react';
import {NavigationContainer, DarkTheme, useTheme, Button} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyButton} from '@react-navigation/elements';
import {ListScreen} from './screens/listScreen';
import {HomeScreen} from './screens/homeScreen';
import Ionicons from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const MyTheme = {
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

const App = () => {
    const isDark = true;
    const {colors} = useTheme();

    return (
        <NavigationContainer theme={isDark ? DarkTheme : MyTheme}>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'List') {
                            iconName = 'list';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="List" component={ListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
