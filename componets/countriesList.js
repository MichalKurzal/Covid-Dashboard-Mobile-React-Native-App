import React, {useMemo} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../img/48/images';
var codes = require('../codes.json');

export function ListComponent() {
    const {colors} = useTheme();

    const Countries = useMemo(
        () =>
            codes.map(country => {
                return (
                    <TouchableOpacity key={country.alpha} style={{flexDirection: 'row'}}>
                        <Image source={images[country.name]}></Image>
                        <Text style={{color: colors.text}}>{country.name}</Text>
                    </TouchableOpacity>
                );
            }),
        [colors],
    );
    return <ScrollView>{Countries}</ScrollView>;
}
