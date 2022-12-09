import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FONTS, COLORS } from "../../assets/const";

export const Input = ({
    title,
    iconName,
    placeholder,
    borderColor,
    onChangeText,
    onBlur,
    value,
    hasError,
    errorMessage }) => {

    return (
        <View style={styles.container}>

            <Text style={styles.inputText}>{title}</Text>

            <View style={styles.inputContainer}>
                <FontAwesome
                    name={hasError ? "times-circle" : iconName}
                    style={hasError ? styles.errorIcon : { ...styles.icon }}
                />
                <TextInput
                    style={hasError ? styles.errorInput : { ...styles.input, borderColor }}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                />

            </View>

            {hasError && (
                <Text style={styles.errorText}>
                    {errorMessage}
                </Text>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        position: 'relative',
        justifyContent: 'flex-start',
        padding: 10,
    },
    icon: {
        position: 'absolute',
        top: 12,
        right: 10,
        fontSize: 22,
        color: COLORS.gray,
        marginRight: 10,
    },
    inputText: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: 10,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.blue,
        padding: 10,
        fontSize: 17,
    },
    errorInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.red,
        padding: 10,
        fontSize: 17,
    },
    errorIcon: {
        position: 'absolute',
        top: 12,
        right: 10,
        fontSize: 22,
        color: COLORS.red,
        marginRight: 10,
    },
    errorText: {
        color: COLORS.red,
        marginLeft: 10
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
    }
});

