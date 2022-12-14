import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, Linking } from "react-native";
import { COLORS, FONTS } from "../../assets/const";

export const SessionCompany = ({ image, label }) => {

    return (

        <TouchableOpacity
            style={style.sessionContainer}
            onPress={() => {
                Linking.openURL('https://lukasvenancio.github.io/tudobemautismoweb/');
            }}
        >
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
        width: '17%',
        height: '50%'

    },
    textProfile: {
        fontSize: 20,
        fontFamily: FONTS.title,
        marginBottom: 20,
    },
});

