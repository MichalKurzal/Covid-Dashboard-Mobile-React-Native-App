import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListScreen} from './screens/listScreen';
import {HomeScreen} from './screens/homeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="List" component={ListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
