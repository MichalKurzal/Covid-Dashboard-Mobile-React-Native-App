import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import getHistoricalData from '../api/getHistroricalData';

const HistoricalData = () => {
    const {colors} = useTheme();
    useEffect(() => {
        getHistoricalData().then(res => {
            console.log(res);
        });
    }, []);

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{color: colors.text}}>Data chart</Text>
        </View>
    );
};

export default HistoricalData;
