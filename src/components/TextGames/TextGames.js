import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import {COLORS} from '../../assets/const';
import {FONTS} from '../../assets/const/fonts';

export const TextGames = ({label}) => {
    return(
        <View style = {styles.textContainer}>
            <Text style = {styles.text}>{label}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        flex:1,
        padding:8,
        fontFamily:FONTS.title,
        marginBottom:'30%',
    },
    text:{
        fontSize:48,
        color:COLORS.white,
        textAlign:'center',
        justifyContent:'center',
        fontWeight:'bold',
    }
})