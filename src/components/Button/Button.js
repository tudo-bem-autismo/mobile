import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../assets/const";

export const Button = ({ label, onPress, backgroundColor, borderRadius, width, height }) => {

    return (

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => onPress()}
                style={{ ...styles.button, backgroundColor, borderRadius, width, height }}
            >
                <Text>{label}</Text>
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
    buttonContainer: {
        flex: 2,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        
    },
    button: {
        width: 138,
        height: 48,
        backgroundColor: COLORS.blue,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...bottomShadow
    },
});
