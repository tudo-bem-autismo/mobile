import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../assets/const';

export const Game = ({ titleGame, gifGame, onPress }) => {
 
    return(
        <View style={styles.game}>

        <TouchableOpacity style={styles.buttonGame} onPress={() => onPress()}>

            <Text style={styles.textGame}>{titleGame}</Text>

            <View style={styles.imageGameContainer}>
                <Image
                    source={gifGame}
                    resizeMode='cover'
                    style={styles.imageGame} />
            </View>

        </TouchableOpacity>

    </View>
    )

}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({
    game: {
        width: '65%',
        height: '25%',
        margin: 10,
        ...bottomShadow,
        borderRadius: 40,
        backgroundColor: COLORS.white,
    },
    buttonGame: {
        height: 160,
        width: '100%',
        borderRadius: 40,
        ...bottomShadow,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
    },
    textGame: {
        fontSize: 20,
        fontFamily: FONTS.title,
        color: COLORS.black,
        textShadowColor: COLORS.black,
        textShadowOffset:{width: 0, height: 0},
        textShadowRadius: 1,
        zIndex: 2,
        margin: 20,

    },
    imageGameContainer: {
        width: '100%',
        height: 193,
        borderRadius: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        overflow: 'hidden',
    },
    imageGame: {
        borderRadius: 40,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    }
})