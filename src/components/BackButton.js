import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { FONTS } from "../assets/const/fonts";
import COLORS from "../assets/const/colors";


export const BackButton = ({ title }) => {

    return (

        <View style={styles.backContainer}>
            <TouchableOpacity style={styles.backButton}>
                <MaterialIcons name="arrow-back-ios" size={27} color="black" />
                <Text style={styles.backContainerText}>{title}</Text>
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({
    backContainer: {
        flex: 1,
        flexDirection: 'row',
        // color: COLORS.black,
        padding: 8,
    },
    backButton: {
        display: 'flex',
        flexDirection: 'row',
    },
    backContainerText: {
        fontSize: 20,
        fontFamily: FONTS.text,
        color: COLORS,
    },
});