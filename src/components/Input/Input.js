import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FONTS, COLORS } from "../../assets/const";

export const Input = ({ title, iconName, placeholder, borderColor }) => {

    return (
        <View style={styles.inputContainer}>

            <Text style={styles.inputText}>{title}</Text>

            <View>
                <FontAwesome 
                    name={iconName} 
                    style={styles.icon}
                    />
                <TextInput style={{...styles.input, borderColor}} placeholder={placeholder}></TextInput>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        height: '40%',
        //position: 'relative',
        //justifyContent: 'flex-start',
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
});

