import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../assets/const";


export const Button = ({ label}) => {

    
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
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
        paddingBottom: 5
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
        //marginVertical: 20,
        ...bottomShadow
    },
});

