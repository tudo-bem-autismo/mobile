import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/const";

export const Close = ({navigation}) => {

    return (

        <View style={style.closeContainer}>
            <TouchableOpacity
                style={style.closeButton}
                onPress={() => navigation.navigate('Home')}
            >
                <MaterialIcons
                    name="close"
                    size={40}
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

