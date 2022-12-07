import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS } from "../../assets/const";

export const Dependent = ({ name, photo, onPress, selected }) => {

    return (

        <TouchableOpacity
            style={style.option}
            onPress={() => onPress()}
        >
            <ImageBackground
                style={style.dependent}
                imageStyle={style.dependent}
                source={{ uri: photo }}
            >
                <View style={selected ? style.selectedDependent : style.dependent}></View>
            </ImageBackground>

            <Text style={style.textOption}>{name}</Text>

        </TouchableOpacity>

    );

}

const style = StyleSheet.create({
    option: {
        padding: 10,
        alignItems: 'center'
    },
    textOption: {
        fontFamily: FONTS.title,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginTop: 5,
    },
    photo: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    selectedDependent: {
        width: 90,
        height: 90,
        borderRadius: 60,
        backgroundColor: '#00000077',
        zIndex: 10,
    },
    dependent: {
        width: 90,
        height: 90,
        borderRadius: 50,
    }
});

