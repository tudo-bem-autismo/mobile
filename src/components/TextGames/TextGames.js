import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS, FONT} from '../../assets/const';

export const TextGames = ({label}) => {
    return(
        <View style = {styles.textContainer}>
            <Text style = {styles.text}>{label}</Text>

        </View>
    );
}

const textShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({
    textContainer:{
        flex:1,
        padding:8,
    },
    text:{
        fontSize:15,
        ...textShadow
    

    }
})