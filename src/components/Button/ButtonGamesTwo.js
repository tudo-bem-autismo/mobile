import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { COLORS, FONTS } from '../../assets/const';

import { getStepGames } from '../../services';

export const ButtonGamesTwo = ({ backgroundColor, borderRadius, widht, height, labelButton, color , onPress = ()=>{}}) => {

    // const [passo2, setPasso2] = useState('');
    // const [cor, setCor] = useState('');

    // const getPassos = async () =>{
    //     const result = await getStepGames()
    //     setPasso2(result.data.passo2)
    //     setCor(result.data.corBotao)
    // }
    // useEffect(() =>{
    //     getPassos()
    // }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.buttonGames, backgroundColor: color, borderRadius, widht, height }}
                onPress={onPress}
            >

                <Text style={styles.text}>{labelButton}</Text>

            </TouchableOpacity>

        </View>
    );
}
const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 55,
        right: 200,
        width: 200,
        height: 50,
        // zIndex: 10,
        backgroundColor: COLORS.red,
    },
    buttonGames: {
        width: 150,
        height: 60,
        //backgroundColor:COLORS.yellow,
        fontFamily: FONTS.title,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '450%',
        marginLeft: '90%',
        ...bottomShadow
    },
    text: {
        color: COLORS.white,
        fontFamily: FONTS.title,
        fontWeight: 'bold',
        fontSize: 20,
    }


})