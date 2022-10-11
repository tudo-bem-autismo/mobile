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
        marginBottom:'30%',
    },
    text:{
        fontSize:48,
        color:COLORS.white,
        textAlign:'center',
        justifyContent:'center',
        textShadowColor:COLORS.grey,
        textShadowOffset:{widht:-1, height:1},
        textShadowRadius:1,
        elevation:10,
        fontFamily:FONTS.title,
        fontWeight:'bold',

    }
})