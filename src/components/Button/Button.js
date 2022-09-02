import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../assets/const";


export const Button = ({ label, submit, formIndex, errors, values, changeFormPage }) => {

    const handleSubmit = () => {

        // Array com todos os campos que estão com erro
        const fieldsWithError = Object.keys(errors)
        
        // Variável para verificar se existe algum erro de validação do campo nome
        const fieldsAreValid = !fieldsWithError.includes("name")
        
        if (fieldsAreValid && values.name) {
            changeFormPage()
        }
        
        submit()
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => handleSubmit()}
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
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
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

