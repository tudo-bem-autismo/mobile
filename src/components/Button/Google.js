import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import google from "../../assets/icons/google.png";

export const Google = () => {

    return (
        <View style={styles.loginIconContainer}>
            <TouchableOpacity>
                <Image source={google} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    loginIconContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
});
