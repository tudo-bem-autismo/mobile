import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../assets/const';
import { FONTS } from '../../assets/const/fonts';


export const TextGames = ({ labelSecondText }) => {

    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{labelSecondText}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        padding: 8,
        marginBottom: '60%',
        zIndex: 2,
    },
    text: {
        fontSize: 40,
        color: COLORS.white,
        textAlign: 'center',
        justifyContent: 'center',
        textShadowColor: COLORS.grey,
        textShadowOffset: { widht: -1, height: 1 },
        textShadowRadius: 1,
        elevation: 10,
        fontFamily: FONTS.title,
        fontWeight: 'bold',

    }
})