import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../assets/const';


export const ButtonImageTwo = ({ source, borderRadius, widht, height, srcImage, onPress = () => { } }) => {

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
    },
    containerImage: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '170%',
        marginBottom: '425%'
    },
    buttonImage: {
        width: 150,
        height: 149,
        backgroundColor: COLORS.yellow,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        ...imageShadow
    },
    image: {
        width: 150,
        height: 149,
        borderRadius: 80
    }
})