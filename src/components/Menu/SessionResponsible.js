import React from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text } from "react-native";
import { COLORS, FONTS } from "../../assets/const";

export const SessionResponsible = ({ image, label, navigation }) => {

    return (

        <TouchableOpacity
            style={style.sessionContainer}
            onPress={() => navigation.navigate('Management')}>
            <Image
                style={style.profileIcon}
                source={image}
            />
            <Text style={style.textProfile}>{label}</Text>
        </TouchableOpacity>

    );

}

const style = StyleSheet.create({
    sessionContainer: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: COLORS.black,
        borderBottomWidth: 1,
    },
    profileIcon: {
        width: '15%',
        height: '45%',

    },
    textProfile: {
        fontSize: 20,
        fontFamily: FONTS.title,
        marginBottom: 20,
    },
});

