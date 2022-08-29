import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

import { FONTS } from "../assets/const/fonts";
import COLORS from "../assets/const/colors"

const Input = ({ title, iconName }) => {

    return (
        <View style={styles.inputContainer}>

            <Text style={styles.inputText}>{title}</Text>

            <View>
                {/* <Icon name={iconName} style={styles.icon} /> */}
                <TextInput style={styles.firstInput} ></TextInput>      
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // justifyContent: 'flex-end',
        // backgroundColor: COLORS.darkBlue,
    },
    icon: {
        fontSize: 22,
        color: COLORS.darkBlue,
        marginRight: 10,
    },
    inputText: {
        fontSize: 20,
        fontFamily: FONTS.mandali,
        marginLeft: 10,
    },
    firstInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.blue,
        padding: 10,
        fontSize: 17,
    },
});

export default Input;