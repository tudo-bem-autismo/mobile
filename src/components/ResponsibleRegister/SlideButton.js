import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../assets/const";

export const SlideButton = () => {

    return (
        <View style={styles.slideContainer}>
            <TouchableOpacity style={styles.selectedSlideButton} />
            <TouchableOpacity style={styles.slideButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 0.5,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      selectedSlideButton: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.black,
        margin: 5,
        backgroundColor: COLORS.purple,
      },
      slideButton: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.black,
        margin: 5,
      },
});
