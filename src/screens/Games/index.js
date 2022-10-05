
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const Games = ({navigation}) => {

    return (


        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Text>Menu</Text>
        </TouchableOpacity>

    );
}