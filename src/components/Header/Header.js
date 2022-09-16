import React from "react";
import { Image, StyleSheet, View } from "react-native";



export const Header = ({image}) => {

    return (
        <View style={styles.headerContainer}>
            <Image source={image} style={styles.headerImg} />
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
        maxWidth: '80%',
        maxHeight: '80%',
    },
});
