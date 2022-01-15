import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function HomeScreen() {
    const {colors} = useTheme();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: colors.text}}>Home!</Text>
        </View>
    );
}
