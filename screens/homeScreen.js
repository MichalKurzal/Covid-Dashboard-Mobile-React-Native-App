import React, {useContext} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import AppContext from '../api/context';
import {Dashboard} from '../componets/dashboard';
import {TopTab} from '../componets/topTab';

import HistoricalData from '../componets/historicalData';

const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

export function HomeScreen() {
    const {refreshing, setRefreshing} = useContext(AppContext);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
             <TopTab/>   
            <Dashboard />
            <HistoricalData/>
        </ScrollView>
    );
}
