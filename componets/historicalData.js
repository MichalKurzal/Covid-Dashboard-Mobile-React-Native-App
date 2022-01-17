import React, {useEffect} from 'react';
import { Text } from 'react-native';
import getHistoricalData from '../api/getHistroricalData';

const HistoricalData = () => {
    useEffect(() => {
        getHistoricalData().then(res => {
            console.log(res);
        });
    }, []);

    return(
        <Text>Data chart</Text>
    )
};

export default HistoricalData;
