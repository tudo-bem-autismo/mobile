import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets/const";

import { FONTS } from "../../assets/const/fonts";

export const Title = ({ title }) => {

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black
      },
      titleText: {
        fontSize: 30,
        fontFamily: FONTS.title,
      },
});
