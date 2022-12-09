<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { COLORS, FONT } from '../../assets/const';
=======
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../assets/const';
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5


export const ButtonImageTwo = ({ source, borderRadius, widht, height, srcImage, onPress = () => { } }) => {

<<<<<<< HEAD
    // const [image2, setImage2] = useState(null);

    // const getImages = async () =>{
    //     const result = await getStepGames()
    //     //setImage2(result.dataTwo.imagemDois)
    // }
    // useEffect(() =>{
    //     getImages()
    // }, [])

=======
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <TouchableOpacity
                    style={{ ...styles.buttonImage, borderRadius, widht, height }}
                    onPress={onPress}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: srcImage ? srcImage : null }}
                    />
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

    container: {
        flexDirection: 'row',
        width: 70,
        height: 10,
        alignItems: 'center',
<<<<<<< HEAD
        backgroundColor: COLORS.black
=======

>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
    },
    containerImage: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '170%',
<<<<<<< HEAD
        marginBottom: '425%',
        // backgroundColor: COLORS.black
=======
        marginBottom: '425%'
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
    },
    buttonImage: {
        width: 150,
        height: 149,
        backgroundColor: COLORS.yellow,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
        // marginBottom:'10%',
=======
        marginBottom: '10%',
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
        ...imageShadow
    },
    image: {
        width: 150,
        height: 149,
        borderRadius: 80
    }
})