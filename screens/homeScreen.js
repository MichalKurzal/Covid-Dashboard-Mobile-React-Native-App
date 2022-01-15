import React from 'react';
import { Dashboard } from '../componets/dashboard';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function HomeScreen() {
    const {colors} = useTheme();
    return (
       <Dashboard/>
    );
}
