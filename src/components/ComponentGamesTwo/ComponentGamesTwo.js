<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { COLORS } from '../../assets/const/colors';
=======
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
import { ButtonImage } from '../../components/Button/ButtonImage';
import { TextGamesTwo } from '../../components/TextGamesTwo';
<<<<<<< HEAD
import { FONTS } from '../../assets/const';
=======
import { ButtonImageTwo } from '../Button/ButtonImageTwo';
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5

export const ComponentGamesTwo = ({ firstStepImage, secondStepImage, firstStepText, correctStepFunction = () => { }, incorrectStepFunction = () => { }, firstStepCorrect }) => {
    return (
        <View style={styles.mainContainer}>
<<<<<<< HEAD
            <View style={styles.buttonsContainer}>

                <ButtonImage
                    borderRadius={80}
                    widht={150}
                    height={149}
                    srcImage={firstStepImage}
                    // onPress={() => { correctStepFunction() }}
                    onPress={() => firstStepCorrect ? correctStepFunction() : incorrectStepFunction()}
                />
                <ButtonImage
                    borderRadius={80}
                    widht={150}
                    height={149}
                    srcImage={secondStepImage}
                    onPress={() => firstStepCorrect ? incorrectStepFunction() : correctStepFunction()}
                />
            </View>
=======
            <ButtonImage
                borderRadius={80}
                widht={150}
                height={149}
                srcImage={firstStepImage}
                onPress={() => firstStepCorrect ? correctStepFunction() : incorrectStepFunction()}
            />
            <ButtonImageTwo
                borderRadius={80}
                widht={150}
                height={149}
                srcImage={secondStepImage}
                onPress={() => firstStepCorrect ? incorrectStepFunction() : correctStepFunction()}
            />
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
            <TextGamesTwo
                labelText={firstStepText}
            />

            <Text style={styles.text}>

            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
<<<<<<< HEAD
        // flex: 2,
        width: '100%',
        height:'100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
=======
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
>>>>>>> 9c5305ff9024c5e69736634810fc29971654bbf5
        marginTop: StatusBar.currentHeight,
    },
    buttonsContainer:{
        width:'100%',
        height: '50%',
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: COLORS.blue
    },
    text:{
        fontSize:40,
        color:COLORS.white,
        textAlign:'center',
        justifyContent:'center',
        textShadowColor:COLORS.grey,
        textShadowOffset:{widht:-1, height:1},
        textShadowRadius:1,
        elevation:10,
        fontFamily:FONTS.title,
        fontWeight:'bold',
    }
});