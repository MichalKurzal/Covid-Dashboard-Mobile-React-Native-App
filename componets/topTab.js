import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import AppContext from '../api/context';

export const TopTab = () => {
    const {colors} = useTheme();
    const {isDark, setIsDark} = useContext(AppContext);
    const switchTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <View>
            <TouchableOpacity
                onPress={() => switchTheme()}
                style={{backgroundColor: colors.background, alignItems: 'center'}}>
                <Icon name="moon" color={colors.text} size={32} />
            </TouchableOpacity>
        </View>
    );
};
