import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

import júlia from "../../assets/images/júlia.png";
import { FONTS } from "../../assets/const";

export const Dependent= ({ name, photo, onPress }) => {

    return (

        <TouchableOpacity
            style={style.option}
            onPress={() => onPress()}
        >
            <Image source={júlia} />
            <Text style={style.textOption}>{name}</Text>
        </TouchableOpacity>

    );

}

const style = StyleSheet.create({
    option: {
        padding: 10,
        // backgroundColor: COLORS.blue
    },
    textOption: {
        fontFamily: FONTS.title,
        textAlign: 'center',
        marginTop: 2,
    },
});

