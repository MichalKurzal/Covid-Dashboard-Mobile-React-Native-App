import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import getWorldwideData from '../api/getWorldwideData';

export function Dashboard() {
    useEffect(() => {
        getWorldwideData().then(res => {
            console.log(res);
        });
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Dashboard</Text>
        </View>
    );
}
