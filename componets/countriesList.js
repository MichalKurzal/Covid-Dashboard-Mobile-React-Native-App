import React, {useCallback} from 'react';
import {Text, Image, TouchableOpacity, FlatList, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import images from '../img/48/images';
var codes = require('../codes.json');

export function ListComponent() {
    const {colors} = useTheme();

    const Country = useCallback(
        ({item}) => (
            <TouchableOpacity
                key={item.alpha}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 5,
                    paddingRight: 5,
                }}>
                <Image source={images[item.name]}></Image>
                <Text
                    style={{
                        color: colors.text,
                        textAlignVertical: 'center',
                        fontFamily: 'monospace',
                    }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        ),
        [colors],
    );

    const renderItem = useCallback(
        ({item}) => {
            return <Country item={item} />;
        },
        [colors],
    );

    return (
        <View>
            <FlatList data={codes} renderItem={renderItem} />
        </View>
    );
}
