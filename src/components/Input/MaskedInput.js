import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { TextInputMask } from 'react-native-masked-text';
import { COLORS, FONTS } from "../../assets/const";

export const MaskedInput = ({
    title,
    iconName,
    placeholder,
    borderColor,
    onChangeText,
    onBlur,
    value,
    hasError,
    errorMessage,
    type,
    options
}) => {

    return (
        <View style={styles.inputContainer}>

            <Text style={styles.inputText}>{title}</Text>

            <View style={styles.container}>
                <FontAwesome
                    name={hasError ? "times-circle" : iconName}
                    style={hasError ? styles.errorIcon : styles.icon}
                />
                <TextInputMask
                    type={type}
                    options={options}
                    style={hasError ? styles.errorInput : { ...styles.input, borderColor }}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                />
                {hasError && (
                    <Text style={styles.errorText}>
                        {errorMessage}
                    </Text>
                )}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: 100,
        position: 'relative',
        justifyContent: 'flex-start',
        padding: 10,
    },
    container: {
        backgroundColor: COLORS.white
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
    }
});

