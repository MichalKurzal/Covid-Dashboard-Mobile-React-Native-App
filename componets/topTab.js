import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import AppContext from '../api/context';

export const TopTab = () => {
    const {colors} = useTheme();
    const {isDark, setIsDark} = useContext(AppContext);
    const iconTheme = isDark ? 'moon' : 'sun';
    const switchTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <View>
            <TouchableOpacity
                onPress={() => switchTheme()}
                style={{
                    backgroundColor: colors.background,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                }}>
                <Text
                    style={{
                        color: colors.text,
                        fontFamily: 'monospace',
                    }}>
                    Covid-19 Dashboard
                </Text>
                <Icon name={iconTheme} color={colors.text} size={32} />
            </TouchableOpacity>
        </View>
    );
};
