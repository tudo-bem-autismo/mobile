import React from "react";
import { Image, StyleSheet, View } from "react-native";

import headerImg from "../assets/images/friends.png";

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <Image source={headerImg} style={styles.headerImg} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 8,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headerImg: {
        width: '75%',
        height: '75%',
    },
});

export default Header;