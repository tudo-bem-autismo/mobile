import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTS } from "../../assets/const";


export const Option = ({ onPress, navigation, idDependent }) => {

    return (
        <View
            style={style.buttonContainer}
            onPress={() => onPress()}
        >

            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('TabsDependent', { idDependent })}
            >
                <Text style={style.textButton}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('DependentManagement', { idDependent })}
            >
                <Text style={style.text}>EDITAR</Text>
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

const style = StyleSheet.create({
    buttonContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        top: 400,
        left: 100,
        position: 'absolute',
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        ...bottomShadow

    },
    textButton: {
        fontFamily: FONTS.title,
        textAlign: 'center',
    },
    text: {
        marginTop: 30,
    }
});

