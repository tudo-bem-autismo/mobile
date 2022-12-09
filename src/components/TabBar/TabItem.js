import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets/const";

export const tabItem = (imageSource, screenName, focused) => (

    <View>
        <Image
            source={imageSource}
            style={{ width: 50, height: 50 }}
        />
        <Text>{screenName}</Text>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: COLORS.beige
    }
})