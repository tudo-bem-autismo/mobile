import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONTS, COLORS } from "../../assets/const";

export const LoginDescription = ({ question, answer, navigation }) => {

    return (
        <View style={styles.loginDescriptionContainer}>
            <Text style={styles.loginQuestionText}>{question}</Text>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.loginButtonText}>{answer}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    loginDescriptionContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    loginQuestionText: {
        fontSize: 17,
        fontFamily: FONTS.text,
    },
    loginButton: {
        marginLeft: 5,
    },
    loginButtonText: {
        fontSize: 17,
        fontFamily: FONTS.text,
        color: COLORS.red,
    },
});
