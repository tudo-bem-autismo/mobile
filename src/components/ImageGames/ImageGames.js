import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {COLORS, FONTS} from '../../assets/const';
import feelingAnger from '../../assets/images/feelings.png';

export const ImageGames = () =>{

    return(
        <View style = {styles.imageContainer}>
            <Image style = {{...styles.image}}
            source ={feelingAnger}
            />
        </View>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        width:200,
        height:210,
        marginBottom:'5%',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5, 
    },
    image: {
        width:200,
        height:10,
        display: 'flex',
        flex:1,
        borderRadius:100,
    },
});