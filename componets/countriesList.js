import React, {useMemo} from 'react';
import {ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../img/48/images';
var codes = require('../codes.json');

export function ListComponent() {
    const {colors} = useTheme();

    const Countries = useMemo(
        () =>
            codes.map(country => {
                return (
                    <TouchableOpacity
                        key={country.alpha}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 5,
                            paddingRight: 5,
                        }}>
                        <Image source={images[country.name]}></Image>
                        <Text
                            style={{
                                color: colors.text,
                                textAlignVertical: 'center',
                                fontFamily: 'monospace',
                            }}>
                            {country.name}
                        </Text>
                    </TouchableOpacity>
                );
            }),
        [colors],
    );
    return <ScrollView>{Countries}</ScrollView>;
}
