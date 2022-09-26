import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

import { COLORS } from "../../assets/const";


<<<<<<< HEAD
export const Button = ({ label, onPress, backgroundColor}) => {
=======
export const Button = ({ label, onPress, backgroundColor, borderRadius }) => {
>>>>>>> jennifer.dev

    
    return (
<<<<<<< HEAD
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => onPress()}
                style={{...styles.button, backgroundColor}}
            >
                <Text>{label}</Text>
            </TouchableOpacity>
        </View>
=======
        <TouchableOpacity
            onPress={() => onPress()}
            style={{ ...styles.button, backgroundColor, borderRadius }}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
>>>>>>> jennifer.dev
    );
}

const bottomShadow = {
    shadowOffset: { width: 0, height: 0, },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
}

const styles = StyleSheet.create({
<<<<<<< HEAD
   buttonContainer: {
        flex: 2,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    },
=======
>>>>>>> jennifer.dev
    button: {
        // width: 138,
        // height: 48,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        //marginVertical: 20,
        ...bottomShadow
    },
});

