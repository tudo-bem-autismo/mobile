import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FONTS } from "../../assets/const";

import profile from '../../assets/images/profile.png';

export const Profile = ({ name }) => {

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
