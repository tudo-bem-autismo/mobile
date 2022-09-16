import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { FONTS, COLORS } from "../../assets/const";

export const InputGenero = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avancar}>
                <FontAwesome name="backward" style={styles.icons}/>
            </TouchableOpacity>
            
            <Text style={styles.text}>MASCULINO</Text>
    
            <TouchableOpacity style={styles.avancar}>
                <FontAwesome name="forward" style={styles.icons}/>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    avancar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    icons: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        borderColor: COLORS.black,
        borderWidth: 0.8,
        width: '70%',
        height: 30,
        textAlign: 'center',
        padding: 5


    }
});