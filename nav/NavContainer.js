import React, {useContext} from 'react';
import {ListScreen} from '../screens/listScreen';
import {HomeScreen} from '../screens/homeScreen';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer, DarkTheme, DefaultTheme, useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppContext from '../api/context';
const Tab = createBottomTabNavigator();

const NavCointainer = () => {
    const {colors} = useTheme();
    const {isDark} = useContext(AppContext);

    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
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
    );
};

export default NavCointainer;
