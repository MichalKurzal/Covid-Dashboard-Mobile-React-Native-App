import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import getHistoricalData from '../api/getHistroricalData';
import {Chart} from './chart';

const HistoricalData = () => {
    const {colors} = useTheme();
    const [data, setData] = useState()
    useEffect(() => {
        getHistoricalData().then(res => {
            setData(res)
        });
    }, []);

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={{color: colors.text}}>Data chart</Text>
            <Chart data={data}/>
        </View>
    );
};

export default HistoricalData;
