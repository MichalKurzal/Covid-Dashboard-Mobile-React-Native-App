import React, {useEffect} from 'react';
import {Svg} from 'react-native-svg';

export const Chart = (props) => {
    useEffect(() => {
        console.log(props.data);
    }, [props.data]);
    return <Svg width={300} height={300}></Svg>;
};
