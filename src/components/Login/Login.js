import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FONTS, COLORS } from "../../assets/const";

export const Login = ({ label }) => {

    return (
        <View style={styles.loginTitleContainer}>
            <View style={styles.loginLine} />
            <Text style={styles.loginTitleText}>{label}</Text>
            <View style={styles.loginLine} />
        </View>
    );
}

const styles = StyleSheet.create({
    loginTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loginLine: {
        width: 40,
        height: 1.5,
        backgroundColor: COLORS.black,
      },
      loginTitleText: {
        fontSize: 19,
        fontFamily: FONTS.mandali,
        marginLeft: 5,
        marginRight: 5,
      },
});
