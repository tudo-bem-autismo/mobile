import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS, FONT} from '../../assets/const';

export const ButtonGames = ({borderRadius, widht, height}) =>{
    return(
        <View>
              <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {{...styles.borderRadius, widht, height}}
                >

                

                </TouchableOpacity>
            </View>
        </View>
    );
}

const imageShadow = {
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
        height:149,
        backgroundColor:COLORS.yellow,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        ...imageShadow
    }


})