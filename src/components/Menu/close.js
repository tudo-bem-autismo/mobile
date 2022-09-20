import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const close = () => {

    return (

        <View style={style.closeContainer}>
            <TouchableOpacity
                style={style.closeButton}
            >
                <MaterialIcons
                    name="close"
                    size={27}
                    color="black" />
            </TouchableOpacity>
        </View>

    );

}

const style = StyleSheet.create({
    closeContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    closeButton: {
        display: 'flex',
        flexDirection: 'row',
    },
});

