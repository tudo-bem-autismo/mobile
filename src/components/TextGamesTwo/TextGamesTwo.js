import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet } from 'react-native';

import {COLORS} from '../../assets/const';
import {FONTS} from '../../assets/const/fonts';

import { getStepGames } from '../../services';

export const TextGamesTwo = ({labelText}) => {

    // const [dialogo, setDialogo] = useState('');

    // const getDialogo = async () =>{
    //     const result = await getStepGames()
    //     //console.log(result.data.dialogo)
    //     setDialogo(result.dataTwo.dialogo)
    // }
    // useEffect(() =>{
    //     getDialogo()
    // }, [])

    return(
        <View style = {styles.textContainer}>
            <Text style = {styles.text}>{labelText}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    textContainer:{
        flex:1,
        padding:8,
        marginBottom:'44%',
    },
    text:{
        fontSize:50,
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