import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

export const ButtonSchedule = ({ label, borderColor, onPress }) => {

    return (

        <TouchableOpacity
            style={{ ...style.buttonContainer, borderColor }}
            onPress={() => onPress()}
        >
            <Text style={style.textButton}>{label}</Text>
        </TouchableOpacity>


    );
}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    buttonContainer: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth: 2,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.white,
        ...bottomShadow

    },
    textButton: {
        fontSize: 16,
        marginTop: 20,
        fontFamily: FONTS.text,
        textAlign: 'center'
    },
});
