import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import alert from '../../assets/images/buttonAlert.png';

export const ButtonAlert = () =>{

    return(
        <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.alertButton} >
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
        padding: 8,
    },
    alertButton: {
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        marginLeft:"70%",
   
    },

});

