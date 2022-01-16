import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import getWorldwideData from '../api/getWorldwideData';

export function Dashboard() {
    const {colors} = useTheme();

    const [cases, setCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [todayCases, setTodayCases] = useState(0);
    const [todayDeaths, setTodayDeaths] = useState(0);
    const [todayRecovered, setTodayRecovered] = useState(0);

    const styles = StyleSheet.create({
        text: {
            color: colors.text,
            fontSize: 16,
            fontFamily: 'monospace',
        },
        listRow: {
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
        },
    });

    useEffect(() => {
        getWorldwideData().then(res => {
            setCases(res['cases']);
            setDeaths(res['deaths']);
            setRecovered(res['recovered']);
            setTodayCases(res['todayCases']);
            setTodayDeaths(res['todayDeaths']);
            setTodayRecovered(res['todayRecovered']);
        });
    }, []);

    return (
        <View style={{flex: 0.2, justifyContent: 'space-between'}}>
            <View style={styles.listRow}>
                <Text style={styles.text}>Total Cases</Text>
                <Text style={styles.text}>Total Deaths</Text>
                <Text style={styles.text}>Total Recovered</Text>
            </View>
            <View style={styles.listRow}>
                <Text style={styles.text}>{cases.toLocaleString('fr-FR')}</Text>
                <Text style={styles.text}>{deaths.toLocaleString('fr-FR')}</Text>
                <Text style={styles.text}>{recovered.toLocaleString('fr-FR')}</Text>
            </View>
            <View style={styles.listRow}>
                <Text style={styles.text}>Today Cases</Text>
                <Text style={styles.text}>Today Deaths</Text>
                <Text style={styles.text}>Today Recovered</Text>
            </View>
            <View style={styles.listRow}>
                <Text style={styles.text}>{todayCases.toLocaleString('fr-FR')}</Text>
                <Text style={styles.text}>{todayDeaths.toLocaleString('fr-FR')}</Text>
                <Text style={styles.text}>{todayRecovered.toLocaleString('fr-FR')}</Text>
            </View>
        </View>
    );
}
