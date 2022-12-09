import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../assets/const';


export const ButtonImage = ({ source, borderRadius, widht, height, srcImage, onPress = () => { } }) => {

    return (

<<<<<<< HEAD
        // <View style = {styles.container}>
              <View style = {styles.imageContainer}>
                <TouchableOpacity 
                style = {{...styles.buttonImage, borderRadius, widht, height}}
                onPress={onPress}
=======
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    style={{ ...styles.buttonImage, borderRadius, widht, height }}
                    onPress={onPress}
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
                >
                    <Image
                        style={styles.image}
                        source={{ uri: srcImage ? srcImage : null }}

                    />
                </TouchableOpacity>
            </View>
        // </View>
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

    container: {
        flex: 1,
        flexDirection: 'row',
<<<<<<< HEAD
        alignItems:'center',
        marginRight:'45%',
        marginBottom:'1%',
    },
    imageContainer:{
        width: 150,
        height: 149,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
        // backgroundColor:COLORS.clearRed 
    },
    buttonImage:{
        width:150,
        height:149,
        backgroundColor:COLORS.white,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        // marginBottom:'100%',
        ...imageShadow
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:80
=======
        width: 150,
        height: 149,
        alignItems: 'center',
        marginRight: '45%',
        marginBottom: '1%',
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',

    },
    buttonImage: {
        width: 150,
        height: 149,
        backgroundColor: COLORS.yellow,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '100%',
        ...imageShadow
    },
    image: {
        width: 150,
        height: 149,
        borderRadius: 80
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
    }


})