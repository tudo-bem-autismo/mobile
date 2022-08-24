import React from "react";
import {TouchableOpacity, StyleSheet, Text, View } from "react-native";
import COLORS from "../assets/const/colors";

const ButtonBack = ({title}) => {
    
    return(

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.6}
            >
                <Text style={styles.titleButton}>{title}</Text>

            </TouchableOpacity>     
        
    );
    
}

const styles = StyleSheet.create({
    button:{
        flex: 1,
        height: 45,
        width: 60,
        backgroundColor: COLORS.white,
        marginVertical: 15,
        alignItems: 'center'
        
    },
    titleButton: {
        color: COLORS.black,
        fontWeight: "bold",
        fontSize: 18
    }
});

export default ButtonBack;