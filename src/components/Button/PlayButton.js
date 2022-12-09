import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { COLORS } from "../../assets/const"

export const PlayButton = ({ onPress }) => {

    return (
        <TouchableOpacity
            style={style.button}
            onPress={() => onPress()}
        >
            <Text style={style.text}>JOGAR</Text>
        </TouchableOpacity>
    )
}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const style = StyleSheet.create({
    button: {
        width: 100,
        height: 45,
        backgroundColor: COLORS.white,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: '35%',
        bottom: 0,
        ...bottomShadow
    },
    text: {
        textAlign: 'center'
    }
})