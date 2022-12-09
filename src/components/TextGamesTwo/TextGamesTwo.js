import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../assets/const';
import { FONTS } from '../../assets/const/fonts';

export const TextGamesTwo = ({ labelText }) => {

    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{labelText}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
    textContainer:{
        // flex:1,
        padding:'5%',
        // marginBottom:'44%',
=======
    textContainer: {
        flex: 1,
        padding: 8,
        marginBottom: '44%',
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
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