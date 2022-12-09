import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../assets/const';

import attackButton from '../../assets/icons/botao-crise.png';

export const MainHeaderDependent = ({ screenName, navigation }) => {
    1
    return (
        <View style={styles.headerContainer}>

            <View style={styles.screenNameContainer}>
                <Text style={styles.screenName}>{screenName}</Text>
            </View>

            <TouchableOpacity
                style={styles.buttonAlert}
                onPress={() => navigation.navigate('SupportButtonForKid')}
            >
                <Image source={attackButton} />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        alignSelf: 'stretch',
        backgroundColor: COLORS.white
    },
    buttonMenu: {
        width: '10%',
        height: '100%',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonAlert: {
        width: '10%',
        height: '100%',
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    screenNameContainer: {
        width: '70%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 30,
    },
    screenName: {
        fontSize: 20,
        textAlign: 'center',
    }
});