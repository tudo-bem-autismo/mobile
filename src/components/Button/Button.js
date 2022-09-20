import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

import { COLORS } from "../../assets/const";


export const Button = ({ label, onPress, backgroundColor, borderRadius }) => {

    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{ ...styles.button, backgroundColor, borderRadius }}
        >
            <Text>{label}</Text>
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

const styles = StyleSheet.create({
    button: {
        // width: 138,
        // height: 48,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...bottomShadow
    },
});

