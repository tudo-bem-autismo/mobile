import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS, FONT} from '../../assets/const';

export const ButtonGames = ({label, tittle, backgroundColor, borderRadius, widht, height}) => {
    return(

        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {{...styles.buttonGames, backgroundColor, borderRadius, widht, height}}
                >

                <Text>{label}</Text>

                </TouchableOpacity>
            </View>
            <View style = {styles.containerButton}>
                <TouchableOpacity 
                style = {{...styles.buttonGames, backgroundColor, borderRadius, widht, height}}
                >

                <Text>{tittle}</Text>

                </TouchableOpacity>
            </View>
            

        </View>
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

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection: 'row',
        width: 300,
        height: 100,
    },
    buttonContainer:{
        display:'flex',
        alignItems: 'center',
        marginRight:'10%',
    },
    containerButton:{
        display:'flex',
        alignItems: 'center',
    },
    buttonGames:{
        width:150,
        height:60,
        backgroundColor:COLORS.yellow,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        ...bottomShadow
    }


})