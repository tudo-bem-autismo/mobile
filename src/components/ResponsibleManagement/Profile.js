import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../../assets/const";

import profile from '../../assets/images/profile.png';

export const Profile = ({name}) => {

    return (
        <View style={styles.profileContainer}>
            <Image
                source={profile}
                style={styles.iconProfile}
            />
            <Text style={styles.nameProfile}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 40,
        // backgroundColor: COLORS.blue
    },
    iconProfile: {
        width: 110,
        height: 110,
    },
    nameProfile: {
        fontSize: 25,
        fontFamily: FONTS.title,
        marginTop: 5,
    },
});
