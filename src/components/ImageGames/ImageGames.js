import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const ImageGames = ({ srcImageGames }) => {

    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                source={{ uri: srcImageGames ? srcImageGames : null }}
                reziseMode='stretch'
            />
        </View>

    );


}

const styles = StyleSheet.create({

    imageContainer: {
        width: 200,
        height: 210,
        marginBottom: '180%',
    },
    image: {
        width: 200,
        height: 10,
        display: 'flex',
        flex: 1,
        borderRadius: 100,



    },
});