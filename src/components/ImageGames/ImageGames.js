import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {COLORS, FONT} from '../../assets/const';
import feelingAnger from '../../assets/images/feeling.png';

export const ImageGames = () =>{

    return(
        <View style = {styles.imageContainer}>
            <Image style = {styles.image}
            source ={feelingAnger}
            />
        </View>

    );
}

const styles = StyleSheet.create({

    imageContainer: {
        flex:2,
        padding: 10,
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        flex:1,
   
    },
});