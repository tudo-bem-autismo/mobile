import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONTS } from "../../assets/const";

import profile from '../../assets/images/profile.png';

export const Profile = () => {

    return (
        <View style={styles.profileContainer}>
            <Image
                source={profile}
                style={styles.iconProfile}
            />
            <Text style={styles.nameProfile}> Elisa Ribeiro </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
