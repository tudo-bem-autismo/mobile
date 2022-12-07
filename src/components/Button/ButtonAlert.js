import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import alert from '../../assets/images/buttonAlert.png';

export const ButtonAlert = ({ onPress }) =>{

    return(
        <View style = {styles.buttonContainer}>
            <TouchableOpacity 
            style = {styles.alertButton} 
            onPress={() => onPress()}
            >
                <Image
                source={alert}
                />

              
            </TouchableOpacity>
            

        </View>
    );

}

const styles = StyleSheet.create({

    buttonContainer: {
        flex:1,
    },
    alertButton: {
        display: 'flex',
        flex:2,
        marginLeft:"85%",
        marginTop:"5%"
   
    },

});

