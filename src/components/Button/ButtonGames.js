import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, FONTS } from '../../assets/const';


export const ButtonGames = ({ backgroundColor, borderRadius, widht, height, labelButton, color, onPress = () => { } }) => {

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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: 55,
        left: 0,
        width: 200,
        height: 50,
        backgroundColor: COLORS.red,
    },
    buttonGames: {
        width: 150,
        height: 60,
        fontFamily: FONTS.title,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '450%',
        marginRight: '90%',
        zIndex: 2,
        ...bottomShadow
    },
    text: {
        color: COLORS.white,
        fontFamily: FONTS.title,
        fontWeight: 'bold',
        fontSize: 20,
        zIndex: 10,
    }


})