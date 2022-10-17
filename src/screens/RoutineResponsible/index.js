import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const RoutineResponsible = ({navigation}) => {

    return (


        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Text>Menu</Text>
        </TouchableOpacity>

    );
}