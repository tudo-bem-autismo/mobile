import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FONTS, COLORS } from "../../assets/const";

export const PasswordInput = ({
    title,
    placeholder,
    borderColor,
    onChangeText,
    onBlur,
    value,
    hasError,
    errorMessage }) => {

    const [hiddenPassword, setHiddenPassword] = useState(true)



    return (
        <View style={styles.inputContainer}>

            <Text style={styles.inputText}>{title}</Text>

            <View>

                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setHiddenPassword(!hiddenPassword)}
                >
                    <FontAwesome
                        name={hasError ? "times-circle" : hiddenPassword ? "eye-slash" : "eye"}
                        style={hasError ? styles.errorIcon : styles.icon}
                        size={50}
                    />
                </TouchableOpacity>

                <TextInput
                    style={hasError ? styles.errorInput : { ...styles.input, borderColor }}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={hiddenPassword}
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
        height: '45%',
        position: 'relative',
        justifyContent: 'flex-start',
        padding: 10,
        marginTop: 35,
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
    iconButton: {
        zIndex: 3,
        elevation: 3,
    }
});

